import { redirect } from "next/navigation";

// /course → redirect to the first (and currently only) course
export default function CourseIndexPage() {
  redirect("/course/ai-in-cyber-security");
}
