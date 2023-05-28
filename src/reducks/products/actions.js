export const SIGN_IN = "SIGN_IN";

export function signInAction(userState) {
  console.log("signaction");
  return {
    type: "SIGN_IN",
    payload: {
      isSignedIn: true,
      role: userState.role,
      uid: userState.uid,
      username: userState.username
    }
  }
};

export const SIGN_OUT = "SIGN_OUT";

export function signOutAction() {
  return {
    type: "SIGN_OUT",
    payload: {
      isSignedIn: false,
      role: "",
      uid: "",
      username: ""
    }
  }
};
/*
 [�\�[�X�R�[�h�T��]
 dispatch()���ꂽ��f�[�^��reducer�ɓ�����
 */