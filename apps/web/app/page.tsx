import { db } from "@repo/db/db"

export default async function Home() {
  const val:any = db.user.findFirst();
  return (
    <div>
        {val?.username}
        {val?.password}
    </div>
  );
}
