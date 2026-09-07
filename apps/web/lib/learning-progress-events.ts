"use client";

const LEARNING_PROGRESS_CHANGED_EVENT = "learning-progress:changed";

export function notifyLearningProgressChanged() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(LEARNING_PROGRESS_CHANGED_EVENT));
}

export function subscribeLearningProgressChanges(
  listener: () => void,
) {
  if (typeof window === "undefined") {
    return () => {};
  }

  const handler = () => listener();
  window.addEventListener(LEARNING_PROGRESS_CHANGED_EVENT, handler);
  return () => window.removeEventListener(LEARNING_PROGRESS_CHANGED_EVENT, handler);
}
