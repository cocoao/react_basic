import React, {Component} from 'react';

// function Header(){}
class Header extends Component{
  // 클래스 내부는 반드시 render 함수로 감싸야한다.
  // 클래스 내부의 멤버 함수는 function 키워드를 사용해서는 안된다.
  render(){
    // return의 값인 JSX는 태그가 하나일때 ()없이 작성하고, 자식태그를 포함할 때는 ()를 사용한다.
    return(
      // 최상위 태그는 모든 태그를 포함하는 하나의 태그만 있어야한다.
      <header>
        <h1>This is Header Area..</h1>
      </header>
    )
  }
}

export default Header;