import DirectorDetail from "@/app/_components/DirectorDetail";
import directorImg from "@/public/directors/d3.png";

export default function Director1() {
  return (
    <>
      <DirectorDetail
        name="QS Abdulaziz Sani Gora, RQS"
        title="Executive Director – Commercial & Finance"
        roles={[" Registered Quantity Surveyor"]}
        image={directorImg}
        bio={[
          " QS Abdulaziz Sani Gora is a Registered Quantity Surveyor and commercial management professional with strong expertise in cost control, contract administration, procurement, and project financial governance. He serves as Executive Director – Commercial & Finance at 80PLUS International Limited.",

          " He holds a First Class degree in Quantity Surveying and advanced professional training in project and procurement management. His experience spans public and private sector projects, including large institutional, infrastructure, and complex construction works.",

          " In his executive role, he is responsible for commercial strategy, budgeting, cashflow management, contract negotiation, valuations, and profit assurance. He plays a central role in safeguarding project margins, managing financial risk, and ensuring that all projects are executed within approved commercial and contractual frameworks.",

          "QS Abdulaziz’s leadership ensures that 80PLUS operates with strong financial discipline, transparency, and profitability, consistent with the standards expected of a professionally managed EPC organization.",
        ]}
      />
    </>
  );
}
