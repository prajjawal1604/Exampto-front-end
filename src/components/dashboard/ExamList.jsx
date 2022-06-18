import { useNavigate } from 'react-router-dom';

import DataBox from '../ui/DataBox';

const ExamCard = (props) => {
  const { exam, linkTo } = props;
  const navigate = useNavigate();

  return (<div className="exam-card" onClick={() => { navigate(`${linkTo}${exam._id}`) }}>
    <DataBox size='small' content={exam.category.map((category, i) => `${i ===0 ? '' : ' / '}${category}`)} />
    <DataBox size='small' icon='group' content={exam.meta.studentsEnrolled} className='enroll-count' />
    <h5>{props.exam.name}</h5>
    <p>Total Questions : {exam.totalQuestions}</p>
    <DataBox size='small' content={new Date( exam.startTime ).toLocaleString()} />
  </div>);
}


const ExamList = (props) => {
  const { list, linkTo } = props;

  if(list.length === 0) return <div className='no-exams'>No exams in this category.</div>

  return (<div className="exam-list">
    {list.map((exam) => <ExamCard key={exam._id} exam={exam} linkTo={linkTo} />)}
  </div>);
}

export default ExamList;