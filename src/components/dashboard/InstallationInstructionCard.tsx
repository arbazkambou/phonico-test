import styles from "./InstallationInstructionCard.module.css";

function InstallationInstructionCard({
  installationInstruction,
}: {
  installationInstruction: string[];
}) {
  return (
    <div className={`${styles.installCard} p-3`}>
      <p className="font20 fontWeight600">{installationInstruction[0]}</p>
      <div>
        {installationInstruction.map((item, index) => {
          return (
            index > 0 && (
              <p key={index} className="mt-2">
                {item}
              </p>
            )
          );
        })}
      </div>
    </div>
  );
}

export default InstallationInstructionCard;
