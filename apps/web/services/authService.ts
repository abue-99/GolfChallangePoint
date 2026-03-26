/**
 * Auth service – wraps all authentication-related API calls.
 */

export type LoginPayload = {
  email: string;
  password: string;
};

export type SignupPayload = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  profileImage?: string;
};

export type AuthResponse = {
  token: string;
};

export type AuthError = {
  error: string;
};

async function post<TBody, TResponse>(
  url: string,
  body: TBody
): Promise<{ data?: TResponse; error?: string; status: number }> {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(body),
  });

  const json = await res.json().catch(() => ({}));

  if (!res.ok) {
    return { error: (json as AuthError).error ?? "Request failed", status: res.status };
  }

  return { data: json as TResponse, status: res.status };
}

export const authService = {
  /**
   * Log in with email and password.
   * Returns the JWT token on success.
   */
  login: (payload: LoginPayload) => post<LoginPayload, AuthResponse>("/auth/login", payload),

  /**
   * Register a new user account.
   */
  signup: (payload: SignupPayload) =>
    post<SignupPayload, { message: string; userId: string }>("/auth/signup", payload),

  /**
   * Request a password reset email.
   */
  forgotPassword: (email: string) =>
    post<{ email: string }, { message: string }>("/auth/forgot", { email }),

  /**
   * Reset password using a reset token.
   */
  resetPassword: (token: string, password: string) =>
    post<{ token: string; password: string }, { message: string }>("/auth/reset", {
      token,
      password,
    }),
};
