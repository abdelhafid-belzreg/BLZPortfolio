import { ArrowRight, ExternalLink, Github } from "lucide-react";

const Projects = [
	{
		id: 1,
		title: "calculator",
		description: "A simple calculator app using React and bootstrap .",
		image: "/projects/project1.png",
		tags: ["React", "Bootstrap"],
		demoUrl: "https://abdelhafid-belzreg.github.io/calculator/",
		githhubUrl: "https://github.com/abdelhafid-belzreg/calculator",
	},
	{
		id: 2,
		title: "RPS game",
		description: "A simple RPS game app using HTML/CSS and JavaScript .",
		image: "/projects/project2.png",
		tags: ["html", "css", "JavaScript"],
		demoUrl: "https://abdelhafid-belzreg.github.io/RPS-GAME/",
		githhubUrl: "https://github.com/abdelhafid-belzreg/RPS-GAME",
	},
	{
		id: 3,
		title: "Todo List",
		description: "A simple Todo List app using HTML/CSS and JavaScript .",
		image: "/projects/project3.png",
		tags: ["html", "css", "JavaScript"],
		demoUrl: "https://abdelhafid-belzreg.github.io/Todo-list/",
		githhubUrl: "https://github.com/abdelhafid-belzreg/Todo-list",
	},
];
export const ProjectSection = () => {
	return (
		<section
			id="projects"
			className="py-24
  px-4 relative">
			<div className="container mx-auto max-w-5xl">
				<h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
					Featured <span className="text-primary">Projects</span>
				</h2>
				<p className="text-center text-muted-foreground mb12 max-w-2xl  mx-auto mb-4">
					Here are some of my recent project , Each project was carefully
					crafted with attention to detail, performance, and user experience.
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{Projects.map((project, key) => (
						<div
							id={key}
							className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
							<div className="h-48 overflow-hidden ">
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 "
								/>
							</div>
							<div className="p-6">
								<div className="flex flex-wrap gap-2 mb-4">
									{project.tags.map((tag) => (
										<span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
											{tag}
										</span>
									))}
								</div>

								<h3 className="text-xl font-semibold mb-1">{project.title}</h3>
								<p className="text-muted-foreground text-sm mb-4">
									{project.description}
								</p>
								<div className="flex justify-between items-center">
									<div className="flex space-x-3">
										<a
											href={project.demoUrl}
											className="text-foreground/80 hover:text-primary transition-colors duration-300"
											target="_blank">
											<ExternalLink size={20} />
										</a>
										<a
											href={project.githhubUrl}
											className="text-foreground/80 hover:text-primary transition-colors duration-300"
											target="_blank">
											<Github size={20} />
										</a>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="text-center mt-12 p">
					<a
						href="https://github.com/abdelhafid-belzreg"
						className="cosmic-button w-fit flex items-center mx-auto gap-2"
						target="_blank">
						CHeck My Github <ArrowRight size={16} />
					</a>
				</div>
			</div>
		</section>
	);
};
