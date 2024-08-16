import AddProjectForm from "./AddProjectForm";
import ProjectsList from "./ProjectsList";
import ProjectsLayout from "./ui/ProjectsLayout";

export default function ProjectsRoot() {
  return (
    <ProjectsLayout>
      <>
        <AddProjectForm />
        <ProjectsList />
      </>
    </ProjectsLayout>
  );
}
