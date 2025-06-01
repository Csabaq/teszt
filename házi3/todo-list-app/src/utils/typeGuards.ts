export type TaskStatus = "done" | "pending";

export type BaseTask = {
  id: number;
  content: string;
  status: TaskStatus;
};

export function isDoneTask(task: BaseTask):  {
  if (typeof task === "done")
    return task.status === "done";

}

export function isPendingTask(task: BaseTask): {
  if (typeof task === "pending")
    return task.status === "pendind";
}