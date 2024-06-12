import { MyPrayersDialog } from "./dialog";
import MyPrayersTable from "./table";

export default function MyPrayersPage() {
  return (
    <>
      <h1>Minhas oracoes..</h1>
      <div className="flex justify-end w-full">
        <MyPrayersDialog />
      </div>
      <div className="w-full">
        <MyPrayersTable />
      </div>
    </>
  );
}
