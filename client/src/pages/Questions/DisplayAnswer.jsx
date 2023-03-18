import React from 'react';
import QuestionDetails from './QuestionDetails';
import { Link,useParams } from 'react-router-dom';
import moment from 'moment';
import Avatar from '../../component/Avatar/Avatar';
import './Questions.css'
import { useSelector,useDispatch } from 'react-redux';
import { deleteAnswer } from '../../actions/question';

const DisplayAnswer =({question,handleShare})=>{
  const User=useSelector((state)=> (state.currentUserReducer))
  const{ id }=useParams()
  const dispatch=useDispatch()
  const handleDelete =(answerId,noOfAnswers)=>{
    dispatch(deleteAnswer(id,answerId,noOfAnswers-1))
  }
    return (
    
        <div>
            {
              question.answer.map((ans)=>(
                <div className='display-ans' key={ans._id}>
                   <p>{ans.answerBody}</p>
                   <div className="question-actions-user">
                   <div >
                    <button type="button" onClick={handleShare}> share</button>
                    {
                                        User?.result?._id === question?.userId &&(
                                            <button type="button" onClick={()=> handleDelete(ans._id,question.noOfAnswers)}>Delete</button>
                                        )
                    }
                   </div>
                   </div>
                   <div className='ans'>
                         <p>answered on {moment(ans.answeredOn).fromNow()}</p>
                    <Link to={`/Users/${ans.userId}`} className="user-link" style={{color:'#0086d8'}}>
                                <Avatar backgroundColor="green" px="8px" py="5px">
                                    {ans.userAnswered.charAt(0).toUpperCase()}
                                </Avatar>
                                <div className='answer'>
                                  {ans.userAnswered}
                                </div>
                    </Link>
                   </div>
                </div>

              ))
            }
        </div>
    )
}
export default DisplayAnswer