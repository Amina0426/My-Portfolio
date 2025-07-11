import SkillBar from "./SkillBar";

export default function Skills() {
  return (
    <div className="container p-5 overflow-auto h-100 d-flex justify-content-center flex-column">
      <h2 className="text-center mb-5">My Skills</h2>

      <div className="row overflow-auto g-5">
        {/* Languages */}
        <div className="col-12 col-md-6 pe-5">
          <h4 className="mb-4">Languages</h4>
          <SkillBar label="C++" percent={85} color="bg-info" />
          <SkillBar label="Java" percent={75} color="bg-info" />
          <SkillBar label="Python" percent={65} color="bg-info" />
          <SkillBar label="C" percent={70} color="bg-info" />
        </div>

        {/* Web Dev */}
        <div className="col-12 col-md-6 ps-5">
          <h4 className="mb-4">Web Development</h4>

          <SkillBar label="HTML" percent={90} color="bg-info" />
          <SkillBar label="CSS" percent={85} color="bg-info" />
          <SkillBar label="JavaScript" percent={80} color="bg-info" />
          <SkillBar label="React" percent={75} color="bg-info" />
        </div>
      </div>
    </div>
  );
}
