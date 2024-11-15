import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Meus projetos
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Fórum moderno em slides"
          description="Um Fórum completamente clean e contemporâneo, apresentando uma infraestrutura tecnológica de última geração, além de um design visualmente impressionante e destacado. Um projeto verdadeiramente extraordinário."
        />
        <ProjectCard
          src="/CardImage.png"
          title="Site de SA:MP moderno em JavaScript"
          description="Um site completamente clean e contemporâneo, apresentando uma infraestrutura tecnológica de última geração, além de um design visualmente impressionante e destacado. Um projeto verdadeiramente extraordinário."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Loja virtual conectado ao samp"
          description="Um projeto de website extremamente moderno e atrativo, destacando-se pelo estilo neon e um visual versátil. Sua principal função é automatizar as vendas de hospedagens gamer no mercado brasileiro, ao mesmo tempo em que gerencia eficientemente dados e informações relacionadas ao serviço oferecido."
        />
      </div>
    </div>
  );
};

export default Projects;
