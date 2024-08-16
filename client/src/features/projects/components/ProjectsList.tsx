import { Typography } from "antd";
import Loading from "../../../common/components/loading/Loading";
import { useGetProjects } from "../hooks/useGetProjects";
import ErrorPage from "../../../common/pages/ErrorPage";
import { useMutateProject } from "../hooks/useMutateProject";
import ProjectListItem from "./ui/ProjectListItem";

export default function ProjectsList() {
  const { projects, loading, errorMessage } = useGetProjects();
  const projectMutations = useMutateProject();

  if (loading) return <Loading />;

  if (errorMessage) return <ErrorPage message={errorMessage} />;

  if (!projects?.length)
    return (
      <Typography.Title level={4} type="secondary" className="mt-[10vh]">
        You haven't added any repo
      </Typography.Title>
    );

  if (projects)
    return (
      <div className="grid gap-5 mt-[10vh]">
        {projects.map((project) => (
          <ProjectListItem
            key={project.id}
            {...{ project, ...projectMutations }}
          />
        ))}
      </div>
    );
}
