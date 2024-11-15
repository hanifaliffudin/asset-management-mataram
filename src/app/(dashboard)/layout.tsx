import Navbar from "@/components/dashboard/Navbar";
import Sidebar from "@/components/dashboard/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sidebar />
      <div className="sm:ml-64">
        <Navbar />
        <section className="mt-16 p-3">{children}</section>
      </div>
    </>
  );
}
