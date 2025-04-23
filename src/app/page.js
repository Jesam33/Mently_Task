// app/page.js
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ManageWidgets from "./components/ManageWidgets";
import WelcomeBanner from "./components/WelcomeBanner";
import ProgramsSection from "./components/ProgramsSection";
import GroupCallsSection from "./components/GroupCallsSection";
import ApplicationsSection from "./components/ApplicationsSection";
import MentorsSection from "./components/MentorsSection";
import RecentActivitiesSection from "./components/RecentActivitiesSection";
import UsersChartSection from "./components/UsersChartSection";

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-[#f4f5fa]">
      <Sidebar activeTab="dashboard" />

      <div className=" flex flex-col overflow-auto relative">
        <Header />
        <div className="w-full bg-[#f4f5fa]  flex justify-end">
          <ManageWidgets />
        </div>

        <main className="flex-1 overflow-y-auto p-6 pl-12 bg-gray-100">
          <WelcomeBanner username="Blessing" />

          <div className="flex gap-[2%] ">
            <div className="flex w-[329px] flex-col">
              <div className=" bg-white  rounded-lg p-4 mb-6">
                <ProgramsSection />
              </div>
              <div className="">
                <UsersChartSection />
              </div>
            </div>

            <div className="flex-1">
              <div className="bg-white  rounded-lg  mb-4">
                <GroupCallsSection />
              </div>

              <div className="flex gap-4">
                <div className="bg-white w-[60%]  mb-6">
                  <ApplicationsSection />
                </div>

                <div className=" w-[40%] ">
                  <div className=" bg-white p-4 rounded-lg mb-4">
                    <MentorsSection />
                  </div>
                  <div className="bg-white p-4 rounded-xl ">
                    <RecentActivitiesSection />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
