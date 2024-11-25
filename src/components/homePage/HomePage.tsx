import { Link } from "react-router-dom";
import styles from "./homePage.module.css";
import { useAuth } from "../../context/authContext";

interface NumberLessons {
  number: number;
}

const NumberItem: React.FC<NumberLessons> = ({ number }) => {
  return <div key={number}>{number}</div>;
};

const homeWorks: string[] = [
  "homework02",
  "homework03",
  "homework04",
  "homework05",
  "homework06",
  "homework08",
  "homework12",
  "homework13",
];

export default function HomePage() {
  const { user } = useAuth();

  return (
    <>
    {user.accessToken ? (
      <>
        <div className={styles.gridLessonContainer}>
        {Array.from({ length: 16 }, (_, index) => index + 1).map(
          (lessonNumber) => (
            <Link to={`lesson${lessonNumber}`}>
              <div>Lesson {lessonNumber}</div>
            </Link>
          )
        )}

        {/* <Link to='lesson14'><div>Lesson 14</div></Link> */}
      </div>
      <div className={styles.gridHWContainer}>
        {homeWorks.map((hw: string) => (
          <Link to={hw}>
            <div>{hw}</div>
          </Link>
        ))}
      </div>
      </>
    ) : (
      <></>
    )}
      
    </>
  );
}
