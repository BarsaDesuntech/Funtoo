import React, { useContext } from 'react'
import context from 'react-bootstrap/esm/AccordionContext';
import AppContext from '../../context/AppContext';

export default function SubTotal(props) {
    console.log(props,'.....');
    const conText=useContext(AppContext)

    let subTotal = 0 ;
    for(let i=0 ; i<conText.arr.length;i++){
        //subTotal=subTotal+(conText.arr[i].price)
        console.log(conText.arr[i].price,'11...........55');
        
        subTotal=subTotal+Number(Number(conText.arr[i].count) * Number(conText.arr[i].price));
        console.log(subTotal,'UUUUUUUUUUU');
         }
  return (
    <div>
      
        
        <div className="d-flex bd-highlight" style={{backgroundColor:"#ddd",marginTop:'3%'}}>
  <div className="p-2 flex-fill bd-highlight">
  <text style={{
                      display: 'flex',
                      marginLeft: '1%', marginBottom: 5,alignSelf:"center"
                  }}> Sub Total: </text>
    </div>
  
  
  <div className="p-2 flex-fill bd-highlight">
  <div style={{display:'flex'}}>
 <text style={{
                       marginBottom: 15, fontSize:17,marginTop:-5
                  }}></text><br></br></div>
                <div style={{marginTop:10,marginLeft:'1%'}}>
                  {/* <div style={{display:'flex',border:'1px solid #BBC4C2',width:101,borderRadius:5 }}>
                  <button style={{backgroundColor:'#BBC4C2',borderWidth:0,borderRadius:1,marginLeft:0}}
                  onClick={() => setCount(count - 1)}><FontAwesomeIcon icon={faMinus}  /></button>
                  <text style={{marginRight:20,marginLeft:18}}> {count} </text>
                  <button style={{backgroundColor:'#BBC4C2',borderWidth:0,borderRadius:3}}
                   onClick={() => setCount(count + 1)}><FontAwesomeIcon icon={faPlus}  /></button>
                  </div> */}
 </div>
    </div>
  

  <div className="p-2 flex-fill bd-highlight">
  <div >
  
  <text style={{marginRight:-30,fontWeight:'bold'}}>  {subTotal} </text>
  </div>
    </div>
</div>
        </div>
  )
}
