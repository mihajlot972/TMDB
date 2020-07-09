import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout/Layout';
import EmptyItem from '../../components/EmptyItem/EmptyItem'
import Button from '../../components/Shared/Button/Button'
import { createAccessToken, createSessionId } from '../../services/auth-service';

function AuthSuccess() {
    const [authStatus, setAuthStatus] = useState("");

    useEffect(() => {
        let request_token = localStorage.getItem('request_token');
        if (!request_token) {
            setAuthStatus("Nothing to be seen here. Go ahead and add some favorite movies")
        } else {
            getTokens(request_token);
        }
    })

    async function getTokens(request_token) {
        let accessToken = await createAccessToken(request_token);
        let sessionId = await createSessionId(accessToken.access_token);
        localStorage.setItem("access_token", accessToken.access_token);
        localStorage.setItem("account_id", accessToken.account_id);
        localStorage.setItem("session_id", sessionId.session_id);
    }

    return (
        <Layout>
            <Head>
                <title>Authorization</title>
            </Head>
            <div style={{ color: 'white' }}>
                {authStatus.length > 0 ?
                    <EmptyItem>{authStatus}</EmptyItem>
                    :
                    <EmptyItem>You are successfully authorized.<br />
                You can add movies to favorites now.
                <Link href="/">
                            <div>
                                <Button>Browse movies</Button>
                            </div>
                        </Link>
                    </EmptyItem>
                }

            </div>
        </Layout>
    )
}

export default AuthSuccess