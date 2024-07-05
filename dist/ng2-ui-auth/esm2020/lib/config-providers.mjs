import { getWindowOrigin } from './utils';
export const defaultProviders = {
    facebook: {
        name: 'facebook',
        url: '/auth/facebook',
        redirectUri: `${getWindowOrigin()}/`,
        authorizationEndpoint: 'https://www.facebook.com/v2.5/dialog/oauth',
        additionalUrlParams: {
            display: 'popup'
        },
        scope: ['email'],
        scopeDelimiter: ',',
        oauthType: '2.0',
        popupOptions: { width: 580, height: 400 }
    },
    google: {
        name: 'google',
        url: '/auth/google',
        authorizationEndpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
        additionalUrlParams: {
            display: 'popup',
            prompt: undefined,
            login_hint: undefined,
            access_type: undefined,
            include_granted_scopes: undefined,
            'openid.realm': undefined,
            hd: undefined
        },
        scope: ['openid', 'email'],
        scopeDelimiter: ' ',
        oauthType: '2.0',
        popupOptions: { width: 452, height: 633 },
        state: () => encodeURIComponent(Math.random()
            .toString(36)
            .substr(2))
    },
    github: {
        name: 'github',
        url: '/auth/github',
        authorizationEndpoint: 'https://github.com/login/oauth/authorize',
        scope: ['user:email'],
        scopeDelimiter: ' ',
        oauthType: '2.0',
        popupOptions: { width: 1020, height: 618 }
    },
    instagram: {
        name: 'instagram',
        url: '/auth/instagram',
        authorizationEndpoint: 'https://api.instagram.com/oauth/authorize',
        scope: ['basic'],
        scopeDelimiter: '+',
        oauthType: '2.0'
    },
    linkedin: {
        name: 'linkedin',
        url: '/auth/linkedin',
        authorizationEndpoint: 'https://www.linkedin.com/uas/oauth2/authorization',
        scope: ['r_emailaddress'],
        scopeDelimiter: ' ',
        oauthType: '2.0',
        popupOptions: { width: 527, height: 582 },
        state: 'STATE'
    },
    twitter: {
        name: 'twitter',
        url: '/auth/twitter',
        authorizationEndpoint: 'https://api.twitter.com/oauth/authenticate',
        oauthType: '1.0',
        popupOptions: { width: 495, height: 645 }
    },
    twitch: {
        name: 'twitch',
        url: '/auth/twitch',
        authorizationEndpoint: 'https://api.twitch.tv/kraken/oauth2/authorize',
        scope: ['user_read'],
        scopeDelimiter: ' ',
        additionalUrlParams: {
            display: 'popup'
        },
        oauthType: '2.0',
        popupOptions: { width: 500, height: 560 }
    },
    live: {
        name: 'live',
        url: '/auth/live',
        authorizationEndpoint: 'https://login.live.com/oauth20_authorize.srf',
        additionalUrlParams: {
            display: 'popup'
        },
        scope: ['wl.emails'],
        scopeDelimiter: ' ',
        oauthType: '2.0',
        popupOptions: { width: 500, height: 560 }
    },
    yahoo: {
        name: 'yahoo',
        url: '/auth/yahoo',
        authorizationEndpoint: 'https://api.login.yahoo.com/oauth2/request_auth',
        scope: [],
        scopeDelimiter: ',',
        oauthType: '2.0',
        popupOptions: { width: 559, height: 519 }
    },
    bitbucket: {
        name: 'bitbucket',
        url: '/auth/bitbucket',
        authorizationEndpoint: 'https://bitbucket.org/site/oauth2/authorize',
        redirectUri: `${getWindowOrigin()}/`,
        scope: ['email'],
        scopeDelimiter: ',',
        oauthType: '2.0',
        popupOptions: { width: 1028, height: 529 }
    },
    spotify: {
        name: 'spotify',
        url: '/auth/spotify',
        authorizationEndpoint: 'https://accounts.spotify.com/authorize',
        scope: ['', 'user-read-email'],
        scopeDelimiter: ',',
        oauthType: '2.0',
        popupOptions: { width: 500, height: 530 },
        state: () => encodeURIComponent(Math.random()
            .toString(36)
            .substr(2))
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLXByb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nMi11aS1hdXRoL3NyYy9saWIvY29uZmlnLXByb3ZpZGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBRTFDLE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFlO0lBQzFDLFFBQVEsRUFBRTtRQUNSLElBQUksRUFBRSxVQUFVO1FBQ2hCLEdBQUcsRUFBRSxnQkFBZ0I7UUFDckIsV0FBVyxFQUFFLEdBQUcsZUFBZSxFQUFFLEdBQUc7UUFDcEMscUJBQXFCLEVBQUUsNENBQTRDO1FBQ25FLG1CQUFtQixFQUFFO1lBQ25CLE9BQU8sRUFBRSxPQUFPO1NBQ2pCO1FBQ0QsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDO1FBQ2hCLGNBQWMsRUFBRSxHQUFHO1FBQ25CLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLFlBQVksRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtLQUMxQztJQUNELE1BQU0sRUFBRTtRQUNOLElBQUksRUFBRSxRQUFRO1FBQ2QsR0FBRyxFQUFFLGNBQWM7UUFDbkIscUJBQXFCLEVBQUUsOENBQThDO1FBQ3JFLG1CQUFtQixFQUFFO1lBQ25CLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLE1BQU0sRUFBRSxTQUFTO1lBQ2pCLFVBQVUsRUFBRSxTQUFTO1lBQ3JCLFdBQVcsRUFBRSxTQUFTO1lBQ3RCLHNCQUFzQixFQUFFLFNBQVM7WUFDakMsY0FBYyxFQUFFLFNBQVM7WUFDekIsRUFBRSxFQUFFLFNBQVM7U0FDZDtRQUNELEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUM7UUFDMUIsY0FBYyxFQUFFLEdBQUc7UUFDbkIsU0FBUyxFQUFFLEtBQUs7UUFDaEIsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdB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QUc7UUFDcEMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDO1FBQ2hCLGNBQWMsRUFBRSxHQUFHO1FBQ25CLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLFlBQVksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtLQUMzQztJQUNELE9BQU8sRUFBRTtRQUNQLElBQUksRUFBRSxTQUFTO1FBQ2YsR0FBRyxFQUFFLGVBQWU7UUFDcEIscUJBQXFCLEVBQUUsd0NBQXdDO1FBQy9ELEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxpQkFBaUIsQ0FBQztRQUM5QixjQUFjLEVBQUUsR0FBRztRQUNuQixTQUFTLEVBQUUsS0FBSztRQUNoQixZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUU7UUFDekMsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUNWLGtCQUFrQixDQUNoQixJQUFJLENBQUMsTUFBTSxFQUFFO2FBQ1YsUUFBUSxDQUFDLEVBQUUsQ0FBQzthQUNaLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FDYjtLQUNKO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElQcm92aWRlcnMgfSBmcm9tICcuLi9wdWJsaWNfYXBpJztcbmltcG9ydCB7IGdldFdpbmRvd09yaWdpbiB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdFByb3ZpZGVyczogSVByb3ZpZGVycyA9IHtcbiAgZmFjZWJvb2s6IHtcbiAgICBuYW1lOiAnZmFjZWJvb2snLFxuICAgIHVybDogJy9hdXRoL2ZhY2Vib29rJyxcbiAgICByZWRpcmVjdFVyaTogYCR7Z2V0V2luZG93T3JpZ2luKCl9L2AsXG4gICAgYXV0aG9yaXphdGlvbkVuZHBvaW50OiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3YyLjUvZGlhbG9nL29hdXRoJyxcbiAgICBhZGRpdGlvbmFsVXJsUGFyYW1zOiB7XG4gICAgICBkaXNwbGF5OiAncG9wdXAnXG4gICAgfSxcbiAgICBzY29wZTogWydlbWFpbCddLFxuICAgIHNjb3BlRGVsaW1pdGVyOiAnLCcsXG4gICAgb2F1dGhUeXBlOiAnMi4wJyxcbiAgICBwb3B1cE9wdGlvbnM6IHsgd2lkdGg6IDU4MCwgaGVpZ2h0OiA0MDAgfVxuICB9LFxuICBnb29nbGU6IHtcbiAgICBuYW1lOiAnZ29vZ2xlJyxcbiAgICB1cmw6ICcvYXV0aC9nb29nbGUnLFxuICAgIGF1dGhvcml6YXRpb25FbmRwb2ludDogJ2h0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbS9vL29hdXRoMi92Mi9hdXRoJyxcbiAgICBhZGRpdGlvbmFsVXJsUGFyYW1zOiB7XG4gICAgICBkaXNwbGF5OiAncG9wdXAnLFxuICAgICAgcHJvbXB0OiB1bmRlZmluZWQsXG4gICAgICBsb2dpbl9oaW50OiB1bmRlZmluZWQsXG4gICAgICBhY2Nlc3NfdHlwZTogdW5kZWZpbmVkLFxuICAgICAgaW5jbHVkZV9ncmFudGVkX3Njb3BlczogdW5kZWZpbmVkLFxuICAgICAgJ29wZW5pZC5yZWFsbSc6IHVuZGVmaW5lZCxcbiAgICAgIGhkOiB1bmRlZmluZWRcbiAgICB9LFxuICAgIHNjb3BlOiBbJ29wZW5pZCcsICdlbWFpbCddLFxuICAgIHNjb3BlRGVsaW1pdGVyOiAnICcsXG4gICAgb2F1dGhUeXBlOiAnMi4wJyxcbiAgICBwb3B1cE9wdGlvbnM6IHsgd2lkdGg6IDQ1MiwgaGVpZ2h0OiA2MzMgfSxcbiAgICBzdGF0ZTogKCkgPT5cbiAgICAgIGVuY29kZVVSSUNvbXBvbmVudChcbiAgICAgICAgTWF0aC5yYW5kb20oKVxuICAgICAgICAgIC50b1N0cmluZygzNilcbiAgICAgICAgICAuc3Vic3RyKDIpXG4gICAgICApXG4gIH0sXG4gIGdpdGh1Yjoge1xuICAgIG5hbWU6ICdnaXRodWInLFxuICAgIHVybDogJy9hdXRoL2dpdGh1YicsXG4gICAgYXV0aG9yaXphdGlvbkVuZHBvaW50OiAnaHR0cHM6Ly9naXRodWIuY29tL2xvZ2luL29hdXRoL2F1dGhvcml6ZScsXG4gICAgc2NvcGU6IFsndXNlcjplbWFpbCddLFxuICAgIHNjb3BlRGVsaW1pdGVyOiAnICcsXG4gICAgb2F1dGhUeXBlOiAnMi4wJyxcbiAgICBwb3B1cE9wdGlvbnM6IHsgd2lkdGg6IDEwMjAsIGhlaWdodDogNjE4IH1cbiAgfSxcbiAgaW5zdGFncmFtOiB7XG4gICAgbmFtZTogJ2luc3RhZ3JhbScsXG4gICAgdXJsOiAnL2F1dGgvaW5zdGFncmFtJyxcbiAgICBhdXRob3JpemF0aW9uRW5kcG9pbnQ6ICdodHRwczovL2FwaS5pbnN0YWdyYW0uY29tL29hdXRoL2F1dGhvcml6ZScsXG4gICAgc2NvcGU6IFsnYmFzaWMnXSxcbiAgICBzY29wZURlbGltaXRlcjogJysnLFxuICAgIG9hdXRoVHlwZTogJzIuMCdcbiAgfSxcbiAgbGlua2VkaW46IHtcbiAgICBuYW1lOiAnbGlua2VkaW4nLFxuICAgIHVybDogJy9hdXRoL2xpbmtlZGluJyxcbiAgICBhdXRob3JpemF0aW9uRW5kcG9pbnQ6ICdodHRwczovL3d3dy5saW5rZWRpbi5jb20vdWFzL29hdXRoMi9hdXRob3JpemF0aW9uJyxcbiAgICBzY29wZTogWydyX2VtYWlsYWRkcmVzcyddLFxuICAgIHNjb3BlRGVsaW1pdGVyOiAnICcsXG4gICAgb2F1dGhUeXBlOiAnMi4wJyxcbiAgICBwb3B1cE9wdGlvbnM6IHsgd2lkdGg6IDUyNywgaGVpZ2h0OiA1ODIgfSxcbiAgICBzdGF0ZTogJ1NUQVRFJ1xuICB9LFxuICB0d2l0dGVyOiB7XG4gICAgbmFtZTogJ3R3aXR0ZXInLFxuICAgIHVybDogJy9hdXRoL3R3aXR0ZXInLFxuICAgIGF1dGhvcml6YXRpb25FbmRwb2ludDogJ2h0dHBzOi8vYXBpLnR3aXR0ZXIuY29tL29hdXRoL2F1dGhlbnRpY2F0ZScsXG4gICAgb2F1dGhUeXBlOiAnMS4wJyxcbiAgICBwb3B1cE9wdGlvbnM6IHsgd2lkdGg6IDQ5NSwgaGVpZ2h0OiA2NDUgfVxuICB9LFxuICB0d2l0Y2g6IHtcbiAgICBuYW1lOiAndHdpdGNoJyxcbiAgICB1cmw6ICcvYXV0aC90d2l0Y2gnLFxuICAgIGF1dGhvcml6YXRpb25FbmRwb2ludDogJ2h0dHBzOi8vYXBpLnR3aXRjaC50di9rcmFrZW4vb2F1dGgyL2F1dGhvcml6ZScsXG4gICAgc2NvcGU6IFsndXNlcl9yZWFkJ10sXG4gICAgc2NvcGVEZWxpbWl0ZXI6ICcgJyxcbiAgICBhZGRpdGlvbmFsVXJsUGFyYW1zOiB7XG4gICAgICBkaXNwbGF5OiAncG9wdXAnXG4gICAgfSxcbiAgICBvYXV0aFR5cGU6ICcyLjAnLFxuICAgIHBvcHVwT3B0aW9uczogeyB3aWR0aDogNTAwLCBoZWlnaHQ6IDU2MCB9XG4gIH0sXG4gIGxpdmU6IHtcbiAgICBuYW1lOiAnbGl2ZScsXG4gICAgdXJsOiAnL2F1dGgvbGl2ZScsXG4gICAgYXV0aG9yaXphdGlvbkVuZHBvaW50OiAnaHR0cHM6Ly9sb2dpbi5saXZlLmNvbS9vYXV0aDIwX2F1dGhvcml6ZS5zcmYnLFxuICAgIGFkZGl0aW9uYWxVcmxQYXJhbXM6IHtcbiAgICAgIGRpc3BsYXk6ICdwb3B1cCdcbiAgICB9LFxuICAgIHNjb3BlOiBbJ3dsLmVtYWlscyddLFxuICAgIHNjb3BlRGVsaW1pdGVyOiAnICcsXG4gICAgb2F1dGhUeXBlOiAnMi4wJyxcbiAgICBwb3B1cE9wdGlvbnM6IHsgd2lkdGg6IDUwMCwgaGVpZ2h0OiA1NjAgfVxuICB9LFxuICB5YWhvbzoge1xuICAgIG5hbWU6ICd5YWhvbycsXG4gICAgdXJsOiAnL2F1dGgveWFob28nLFxuICAgIGF1dGhvcml6YXRpb25FbmRwb2ludDogJ2h0dHBzOi8vYXBpLmxvZ2luLnlhaG9vLmNvbS9vYXV0aDIvcmVxdWVzdF9hdXRoJyxcbiAgICBzY29wZTogW10sXG4gICAgc2NvcGVEZWxpbWl0ZXI6ICcsJyxcbiAgICBvYXV0aFR5cGU6ICcyLjAnLFxuICAgIHBvcHVwT3B0aW9uczogeyB3aWR0aDogNTU5LCBoZWlnaHQ6IDUxOSB9XG4gIH0sXG4gIGJpdGJ1Y2tldDoge1xuICAgIG5hbWU6ICdiaXRidWNrZXQnLFxuICAgIHVybDogJy9hdXRoL2JpdGJ1Y2tldCcsXG4gICAgYXV0aG9yaXphdGlvbkVuZHBvaW50OiAnaHR0cHM6Ly9iaXRidWNrZXQub3JnL3NpdGUvb2F1dGgyL2F1dGhvcml6ZScsXG4gICAgcmVkaXJlY3RVcmk6IGAke2dldFdpbmRvd09yaWdpbigpfS9gLFxuICAgIHNjb3BlOiBbJ2VtYWlsJ10sXG4gICAgc2NvcGVEZWxpbWl0ZXI6ICcsJyxcbiAgICBvYXV0aFR5cGU6ICcyLjAnLFxuICAgIHBvcHVwT3B0aW9uczogeyB3aWR0aDogMTAyOCwgaGVpZ2h0OiA1MjkgfVxuICB9LFxuICBzcG90aWZ5OiB7XG4gICAgbmFtZTogJ3Nwb3RpZnknLFxuICAgIHVybDogJy9hdXRoL3Nwb3RpZnknLFxuICAgIGF1dGhvcml6YXRpb25FbmRwb2ludDogJ2h0dHBzOi8vYWNjb3VudHMuc3BvdGlmeS5jb20vYXV0aG9yaXplJyxcbiAgICBzY29wZTogWycnLCAndXNlci1yZWFkLWVtYWlsJ10sXG4gICAgc2NvcGVEZWxpbWl0ZXI6ICcsJyxcbiAgICBvYXV0aFR5cGU6ICcyLjAnLFxuICAgIHBvcHVwT3B0aW9uczogeyB3aWR0aDogNTAwLCBoZWlnaHQ6IDUzMCB9LFxuICAgIHN0YXRlOiAoKSA9PlxuICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KFxuICAgICAgICBNYXRoLnJhbmRvbSgpXG4gICAgICAgICAgLnRvU3RyaW5nKDM2KVxuICAgICAgICAgIC5zdWJzdHIoMilcbiAgICAgIClcbiAgfVxufTtcbiJdfQ==