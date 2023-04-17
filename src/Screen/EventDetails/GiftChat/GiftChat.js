import { GiftedChat } from 'react-web-gifted-chat';
import React from 'react';

import Footer from '../../../Layout/Footer';
import Header from '../../Cart/CartHeader';
import { useState } from 'react';
import { useEffect } from 'react';
import HeaderAll from '../../../Layout/HeaderAll';


function GiftChat() {

  const [messages, setMessages] = useState([])

  useEffect(()=>{
    setMessages([
              {
                id: 1,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                  id: 2,
                  name: 'React',
                  avatar: 'https://facebook.github.io/react/img/logo_og.png',
                },
              },
            ],
  )
          },[])

          const onSend=(messages = [])=>{
            console.log('....messages..........',messages)
          }


  return (
    <>
      <div style={StyleSheet.containet}>
        {/* <Header title={"Chat"}/> */}
        <HeaderAll 
        all={true}
        title="Chat"/>
        <div>
        <div>Hi</div>
        <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          id: 1,
        }}
      />
        </div>

        <div style={{position:"fixed",bottom:0,width:"100%"}}>
          <Footer />
        </div>
        
      </div>
    </>
  )
}

export default GiftChat


// import { GiftedChat } from 'react-web-gifted-chat';
// import React from 'react';

// import Footer from '../../../Layout/Footer';
// import Header from '../../Cart/CartHeader';
 
// export class GiftChat extends React.Component {
 
//   state = {
//     messages: [],
//   };
 
//   componentWillMount() {
//     this.setState({
//       messages: [
//         {
//           id: 1,
//           text: 'Hello developer',
//           createdAt: new Date(),
//           user: {
//             id: 2,
//             name: 'React',
//             avatar: 'https://facebook.github.io/react/img/logo_og.png',
//           },
//         },
//       ],
//     });
//   }
 
//   onSend(messages = []) {
//     this.setState((previousState) => ({
//       messages: GiftedChat.append(previousState.messages, messages),
//     }));
//   }
 
//   render() {
//     return (
//       <>
//       <Header title={"Chat"} />
//       <div>
//         <div>chat</div>
//       <GiftedChat
//         messages={this.state.messages}
//         onSend={(messages) => this.onSend(messages)}
//         user={{
//           id: 1,
//         }}
//       />
//       </div>
        
//       <div style={{position:"fixed",bottom:0,width:"100%"}}>
//           <Footer />
//         </div>
//       </>
     
//     );
//   }
 
// }
