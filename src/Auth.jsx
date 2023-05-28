import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux"
import { getIsSignedIn } from "./reducks/users/selectors"
import { listenAuthState} from "./reducks/users/operations"

const Auth = ({ children }) => {
  const dispatch = useDispatch()
  const selector = useSelector((state) => state);
  const isSignedIn = getIsSignedIn(selector);

  useEffect(() => {
    console.log("useEffect if");
    if (!isSignedIn) {
      dispatch(listenAuthState())
    }
  }, []);

  if (!isSignedIn) {
    
    return <></>
  }
  else { //�T�C���C�����Ă邩��Home�ɂ�����
    return children
  }

}

export default Auth;

/*
 [�\�[�X�R�[�h�T��]
 ���[�U�[���T�C���C�����Ă邩���肷�鏈��
 */