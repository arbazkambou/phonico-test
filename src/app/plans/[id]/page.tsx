import PlanDetailsCard from "@/components/plans/PlanDetailsCard";
import Faqs from "@/components/shared/Faqs";
import { getSupportedDeviceList } from "@/lib/CheckComaptibilityApi";
import { getPlans } from "@/lib/PlanApis";

export const metadata = {
  title: "Plan Detail",
  description:
    "Contact us if you have any questions or are concerned about our cheap wireless phone service including 2GB, 5GB, 10GB, and many more. We are here to help you at any time.",
};

async function page({ params }: { params: { id: string } }) {
  const [plans, supportedDevices] = await Promise.all([
    getPlans(),
    getSupportedDeviceList(),
  ]);
  const filteredPlan = plans.data.find((plan) => plan.id === params.id);
  const accordionData = [
    {
      eventKey: "0",
      question: "Are these Plans Valid outside the USA?",
      body: "Phonico coverage focuses on eSIM prepaid plans for the USA only. However, You will have a roaming option for Mexico and Canada. See our coverage details here.",
    },
    {
      eventKey: "1",
      question: "What happens if I Run Out of Data?",
      body: `Mostly, eSIM providers start charging whenever you surpass data limits. Phonico understands the extra burden on your pockets and doesn't charge a cent for over-usage. You can stay connected to the carrier network because of unlimited talk & text. For data usage monitoring, Download the Phonico App and update your plans as per your need.`,
    },
    {
      eventKey: "2",
      question: "How do I activate my eSIM plan?",
      body: `Phonico offers the best eSIM plans and a simple activation process. After you purchase the suitable ESIM plan, you will receive a QR code in your email. Scan the code with your cellphone camera or activate your eSIM from the Phonico App. That’s it. Enjoy your connectivity.`,
    },
    {
      eventKey: "3",
      question: "Can I share my eSIM data with other devices?",
      body: `The one feature you can count on is to share your Phonico eSIM data via hotspot for every type of package plan you buy. Connect your devices or share data with your family or colleagues.`,
    },
    {
      eventKey: "4",
      question: "Can I Upgrade or Change my plan after purchasing?",
      body: "Yes, Phonico offers upgrade or change-of-plan options after purchasing any plan. You can use the Phonico app to upgrade to a higher-volume plan or change it.",
    },
    {
      eventKey: "5",
      question: "Is Customer Support available if I face any issues?",
      body: "Yes, you will have 24/7 customer support online. You can ask questions or discuss your issue by tapping the support option in the Phonico app.",
    },
    {
      eventKey: "6",
      question: "Do I need a Local number to use these plans?",
      body: "No, every Phonico eSIM plan includes a US-based number. Thus, you can make calls, send texts, and stay connected without needing a local number.",
    },
    {
      eventKey: "6",
      question: "Are there any hidden charges with these plans?",
      body: "No, there are no hidden charges. All the plans are straightforward, and you only have to pay for the plan you are purchasing.",
    },
  ];

  return (
    <>
      {filteredPlan && (
        <PlanDetailsCard
          plan={filteredPlan}
          supportedDevices={supportedDevices?.data}
        />
      )}
      <Faqs data={accordionData} />
    </>
  );
}

export default page;
