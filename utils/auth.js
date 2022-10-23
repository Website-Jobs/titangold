import { useEffect } from 'react'
import Router from 'next/router'
import nextCookie from 'next-cookies'
import cookie from 'js-cookie'


export const login = (accid, expires) => {
    const inMinutes = new Date(new Date().getTime() + expires * 60 * 1000);
    cookie.set('accid', accid, { expires: inMinutes })
    Router.push('/my')
}

export const auth = ctx => {
    const { accid } = nextCookie(ctx)
    if (!accid) {
        if (typeof window === 'undefined') {
            ctx.res.writeHead(302, { Location: '/auth/login' })
            ctx.res.end()
        } else {
            Router.push('/auth/login')
        }
    }
    return accid
}

export const logout = () => {
    cookie.remove('accid')
    window.localStorage.setItem('logout', Date.now())
    Router.push('/auth/login')
}

export const withAuthSync = WrappedComponent => {

    const Wrapper = props => {
        const syncLogout = event => {
            if (event.key === 'logout') {
                console.log('logged out from storage!')
                Router.push('/auth/login')
            }
        }
        useEffect(() => {
            window.addEventListener('storage', syncLogout)
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
