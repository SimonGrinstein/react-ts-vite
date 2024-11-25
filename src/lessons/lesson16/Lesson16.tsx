import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Lesson16() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("../store");
  }, [navigate]);
  return <></>;
}
