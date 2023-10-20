import ".././styles/pages/AddTaskPage.css";
import { Button } from "../components/common/Button";
import { Input } from "../components/common/Input";
import { Title } from "../components/common/Title";

export const AddTaskPage = () => {
  return (
    <div className="add-task-page">
      <Title content={"Create a new task"} />
      <form className="add-task-page-form">
        <div className="add-task-page-input-wrapper">
          <Input label="Task title" placeholder="Task title" />
        </div>

        <div className="add-task-page-input-wrapper">
          <Input label="End date" />
        </div>

        <div className="add-task-page-input-wrapper">
          <Input label="Task title" />
        </div>
        <div className="add-task-page-input-wrapper">
          <Input label="Task title" />
        </div>
        <div className="add-task-page-input-wrapper-bg">
          <Input label="Task title" />
        </div>
        <div className="add-task-page-btn-wrapper">
          <Button size="large">Add to list</Button>
        </div>
      </form>
    </div>
  );
};
