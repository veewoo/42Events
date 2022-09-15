import { useLocation, useParams, useSearchParams } from "react-router-dom";

export function EventDetail() {
  const [param] = useSearchParams();
  const { search } = useLocation();

  const { id, a } = useParams();

  console.log(id, param.get("a"));

  return <div>Event Detail</div>;
}
