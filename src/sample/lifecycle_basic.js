import React from 'react';

class App extends React.Component{

  constructor(props){
    // constructor에서 받아온 props 전달값은 super 파라미터에 지정한다.
    super(props);
    console.log("2. constructor call");
  }

  // 화면이 렌더링 된 이후 실행(render 함수 실행 후 실행 / 가장 마지막에 실행)
  componentDidMount(){
    console.log('componentDidMount call'); 
  }

  state = {
    count : 0,
  }
  add = () => this.setState({count:this.state.count +1});

  // 화면이 상태 변화가 이뤄진 이후 실행
  componentDidUpdate(){
    console.log('4. componenentDidUpdate call')
  }

  render(){
    console.log('1. render call');
    return(
      <div>
        <h1>This Life Cycle Basics</h1>
        <button onClick={this.add}>AdDD</button>
      </div>
    );
  }
}
export default App;