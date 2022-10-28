import { useEffect } from 'react'
import Router from 'next/router'
import nextCookie from 'next-cookies'
const cookie = require('js-cookie')
import { useAtom } from 'jotai'
import { accidAtom } from '../app'

export const login = (accid, expires) => {
    const inMinutes = new Date(new Date().getTime() + expires * 60 * 1000);
    cookie.set('accid', accid, { expires: inMinutes })
    Router.push('/my/')
}

export const logout = () => {
    cookie.remove('accid')
    window.localStorage.setItem('logout', Date.now())
    Router.push("/users/login")
}

export const loggedIn = ctx => {
    // Checks if there is a saved token and it's still valid
    const { accid } = nextCookie(ctx);
    if (!accid) {
        return false;
    }
    return true;
}


export const auth = ctx => {
    const { accid } = nextCookie(ctx)
    if (!accid) {
        if (typeof window === 'undefined') {
            ctx.res.writeHead(302, { Location: '/users/login' })
            ctx.res.end()
        } else {
            Router.push('/users/login')
        }
    }
    return accid
}



export const withAuthSync = WrappedComponent => {
    const Wrapper = props => {
        const syncLogout = event => {
            if (event.key === 'logout') {
                console.log('logged out from storage!')
                Router.push('/users/login')
            }
        }
        const [, setAccid] = useAtom(accidAtom);
        useEffect(() => {
            window.addEventListener('storage', syncLogout)
            setAccid(cookie.get('accid'));
            return () => {
                window.removeEventListener('storage', syncLogout)
                window.localStorage.removeItem('logout')
            }
        }, [])
        return <WrappedComponent {...props} />
    }

    Wrapper.getInitialProps = async ctx => {
        const accid = auth(ctx);
        const componentProps = WrappedComponent.getInitialProps && (await WrappedComponent.getInitialProps(ctx));
        return { ...componentProps, accid }
    }

    return Wrapper
}
