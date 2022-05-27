# 카운터와 TODOLIST : REACT

## counter
### counter에서 사용한 HOOK
- useState
  - counter의 숫자값을 state로 설정
  - 증가나 감소에서 state의 값을 설정할 때 동기화로 하기 위하여 setValue에 callback함수를 전달

## todo-list
### todo-list에서 사용한 HOOK
- useState
  - todo array, input을 state로 설정
- useEffect
  - upMount,DidMount를 활용하여 rendering을 확인하고 나중에 rendering최적화를 할 때 사용 될 수 있을 것 같아서 사용
- useRef
  - todo-list에서 하나의 item(할 일)마다 unique key를 property로 전달해 줘야되고 삭제시 유용한 id값을 생성할 때 사용
- useCallback
  - container가 rendering되어도 특정 state가 변하지 않는 이상 고정적으로 사용 할 수 있게 설정
- memo
  - property의 값이 바뀌지 않는 한 re-rendering 최소화

### 파일 구분
```bash
├── public
├── src
│   ├── img
│   ├── container
│   ├── component
│   ├── App.js
│   └── index.js
└── package.json
``` 
+) component들을 모아서 container에 담아주는 형식으로 설정

### state관리
state관리는 container에서 다 하도록 설정하였음.
redux를 사용하면 따로 state들을 설정하여서 합친 후 store로 전체 state를 관리할 수 있는 방법이 있음.
