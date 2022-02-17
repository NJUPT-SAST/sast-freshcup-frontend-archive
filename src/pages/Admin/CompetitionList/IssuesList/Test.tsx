import { useParams } from "react-router-dom";
import EditIssues from "./EditIssues/EditIssues";

export default function Test() {
  const { id } = useParams();
  return <>${id}<EditIssues></EditIssues></>;
}
