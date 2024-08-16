import { Alert, Button, Card, Typography } from "antd";
import { GithubFilled, StarFilled, CloseCircleFilled } from "@ant-design/icons";
import {
  Project,
  RemoveProjectVariables,
  UpdateProjectVariables,
} from "../../types";
import Link from "antd/es/typography/Link";

type ProjectListItemProps = {
  project: Project;
  updateError?: string;
  removeError?: string;
  updateProject: ({
    id,
    projectInput,
  }: UpdateProjectVariables) => Promise<void>;
  removeProject: ({ projectId }: RemoveProjectVariables) => Promise<void>;
};

export default function ProjectListItem({
  project,
  updateProject,
  removeProject,
  updateError,
  removeError,
}: ProjectListItemProps) {
  const update = () => {
    updateProject({
      id: project.id,
      projectInput: { repoName: `${project.owner}/${project.name}` },
    });
  };

  const remove = () => {
    removeProject({ projectId: project.id });
  };
  return (
    <Card>
      <div className="grid items-center grid-cols-9">
        <div>{project.name}</div>

        <div>{project.owner}</div>

        <Link target="_blank" href={project.url}>
          <GithubFilled />
        </Link>

        <div>
          <StarFilled className="mr-1" />
          {project.stars}
        </div>

        <Typography.Text>forks: {project.forks}</Typography.Text>

        <Typography.Text>issues: {project.issues}</Typography.Text>

        <Typography.Text>
          {new Date(
            project.createdAt as unknown as number
          ).toLocaleDateString()}
        </Typography.Text>

        <Button onClick={update}>Update</Button>

        <CloseCircleFilled
          onClick={remove}
          className="ml-auto p-3 cursor-pointer text-danger"
        />
      </div>

      {updateError && <Alert message={updateError} type="error" />}

      {removeError && <Alert message={removeError} type="error" />}
    </Card>
  );
}
