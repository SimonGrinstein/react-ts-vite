import { useEffect, useState } from 'react';
import styles from "./lesson10.module.css"
import cn from "classnames"
import MyButton from '../../components/myButton/MyButton';
import Loader from '../../components/loader/Loader';


interface ICatData {
  fact: string;
  length: number;
}

export default function Lesson10(): JSX.Element {

  const [catFact, setCatFact] = useState<string>('');
  const [catFactsArr, setCatFactsArr] = useState<String[]>([]);
  const [isStart, setIsStart] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchCat = async (): Promise<void> => {
    const res = await fetch('https://catfact.ninja/fact');
    const data: ICatData = await res.json();
    
    setCatFact(data.fact);
    setLoading(false);
    setIsStart(false);
    setCatFactsArr(prev => [data.fact, ...prev]);
    
  };

  const handleGetNewCatFact = () => {
    setLoading(true);

    setTimeout(() => {
      fetchCat();
    }, 500);
  };

  const handleClearAllData = () => {
    setLoading(false);
    setIsStart(true);
    setCatFact("");
    setCatFactsArr([]);
  };

  // useEffect(() => {
  //   fetchCat();
  // }, []);

  //console.log(catFactsArr);

  return (
    <>
    <div className="lesson-container">
      <h2 className={cn(styles.desc, styles.boldText)}>Cat Facts</h2>
      <MyButton text="GET MORE INFO" func={handleGetNewCatFact} isDanger={false} />
    </div>

    <div className={cn(styles.lesson10Value)}>
      {isStart ? <h3>If you want a fact about cats, click the button above!</h3> : 
        (loading ? <Loader /> : (
          <>
          <p className={cn(styles.desc)}>
            {catFactsArr.map((a, i) => (
              <p key={i}>{i+1}: {a}</p>
            ))}
            
          </p>
          <p className={cn(styles.desc)}>
          <MyButton text="DELETE ALL DATA" func={handleClearAllData} isDanger={true} />
          </p>
          </>
          )
      )}
    </div>

    </>
  );
}

