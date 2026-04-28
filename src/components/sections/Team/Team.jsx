import { TeamCard } from "@/components/ui";
import team from "@/data/team.json";

function Team() {
  return (
    <section className="flex flex-col items-center gap-12 px-[2.7vw]">
      <div className="inline-flex flex-col items-center gap-4">
        <h2 className="heading-2">Notre équipe</h2>

        <p className="text-text-secondary text-lg">Prête à vous servir !</p>
      </div>

      {/* Card container */}
      <div className="flex flex-wrap justify-center gap-[7vw]">
        {team.map((member) => (
          <TeamCard
            key={member.id}
            imgSrc={member.imgSrc}
            imgAlt={member.imgAlt}
            imgWidth={member.imgWidth}
            imgHeight={member.imgHeight}
            name={member.name}
            role={member.role}
            description={member.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Team;
