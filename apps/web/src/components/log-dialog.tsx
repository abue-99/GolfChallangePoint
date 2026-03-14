"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { api } from "@/lib/api";
import type { InputSchema } from "@/lib/types";

export function LogDialog({ eventId, schema }: { eventId: string; schema: InputSchema }) {
  const [open, setOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data: any) => {
    const payload: any = { eventId, type: schema };
    if (schema === "numeric_success") {
      payload.attempts = Number(data.attempts);
      payload.successes = Number(data.successes);
    } else if (schema === "numeric_score") {
      payload.score = Number(data.score);
    } else {
      payload.text = data.text;
    }
    await api.createLog(payload);
    reset();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild><Button size="sm">Log</Button></DialogTrigger>
      <DialogContent>
        <DialogHeader><DialogTitle>Submit Log</DialogTitle></DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          {schema === "numeric_success" && (
            <>
              <div>
                <Label htmlFor="attempts">Attempts</Label>
                <Input id="attempts" type="number" {...register("attempts", { required: true })} />
              </div>
              <div>
                <Label htmlFor="successes">Successes</Label>
                <Input id="successes" type="number" {...register("successes", { required: true })} />
              </div>
            </>
          )}
          {schema === "numeric_score" && (
            <div>
              <Label htmlFor="score">Score</Label>
              <Input id="score" type="number" step="0.1" {...register("score", { required: true })} />
            </div>
          )}
          {schema === "text_reflection" && (
            <div>
              <Label htmlFor="text">Reflection</Label>
              <Textarea id="text" rows={4} {...register("text", { required: true })} />
            </div>
          )}
          <Button type="submit" className="w-full">Save</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
