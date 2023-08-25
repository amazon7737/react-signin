import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

const User = ({}) => {
    const Data = {
        id: 'amazon7737',
        password: '1234',
    };
    // 로그인 데이터 정의
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    // 상태유지
    const Myfunction = () => {
        // setStatus(true);
        dispatch({
            type: 'SET_TOKEN',
            payload: true,
        }); // console.log('!!!:', status);
    };

    const dispatch = useDispatch();
    const token = useSelector((state) => state.token);

    // 로그인데이터 관리

    const inputIdHandler = (e) => {
        setId(e.target.value);
    };

    const inputPassHandler = (e) => {
        setPassword(e.target.value);
    };

    // 로그인 처리

    const signIn = () => {
        const userData = {
            userId: id,
            userPassword: password,
        };

        try {
            console.log('userData:', userData);
            if (userData.userId === Data.id && userData.userPassword === Data.password) {
                Myfunction();
                alert('로그인 확인되었습니다.');
            } else {
                alert('아이디 또는 비밀번호를 확인해주세요.');
            }
        } catch (error) {
            console.log(error);
        }
    };

    // 로그아웃 처리

    const signOut = () => {
        dispatch({
            type: 'CLEAR_TOKEN',
        });
        alert('로그아웃 되었습니다.');
    };

    useEffect(() => {
        console.log('!!!:', token);
    }, [token]);

    return (
        <div className="data">
            <input type="text" onChange={inputIdHandler} placeholder="아이디를 입력하세요" />
            <input type="text" onChange={inputPassHandler} placeholder="비밀번호를 입력하세요" />
            <button onClick={signIn}>로그인하기</button>

            <button onClick={signOut}>로그아웃하기</button>
        </div>
    );
};

export default User;
