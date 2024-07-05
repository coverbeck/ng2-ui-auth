/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { getWindowOrigin } from './utils';
var ɵ0 = /**
 * @return {?}
 */
function () {
    return encodeURIComponent(Math.random()
        .toString(36)
        .substr(2));
}, ɵ1 = /**
 * @return {?}
 */
function () {
    return encodeURIComponent(Math.random()
        .toString(36)
        .substr(2));
};
/** @type {?} */
export var defaultProviders = {
    facebook: {
        name: 'facebook',
        url: '/auth/facebook',
        redirectUri: getWindowOrigin() + "/",
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
        state: (ɵ0)
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
        redirectUri: getWindowOrigin() + "/",
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
        state: (ɵ1)
    }
};
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLXByb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi11aS1hdXRoLyIsInNvdXJjZXMiOlsibGliL2NvbmZpZy1wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxTQUFTLENBQUM7Ozs7QUFpQy9CO0lBQ0wsT0FBQSxrQkFBa0IsQ0FDaEIsSUFBSSxDQUFDLE1BQU0sRUFBRTtTQUNWLFFBQVEsQ0FBQyxFQUFFLENBQUM7U0FDWixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQ2I7QUFKRCxDQUlDOzs7QUF1Rkk7SUFDTCxPQUFBLGtCQUFrQixDQUNoQixJQUFJLENBQUMsTUFBTSxFQUFFO1NBQ1YsUUFBUSxDQUFDLEVBQUUsQ0FBQztTQUNaLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FDYjtBQUpELENBSUM7O0FBaElQLE1BQU0sS0FBTyxnQkFBZ0IsR0FBZTtJQUMxQyxRQUFRLEVBQUU7UUFDUixJQUFJLEVBQUUsVUFBVTtRQUNoQixHQUFHLEVBQUUsZ0JBQWdCO1FBQ3JCLFdBQVcsRUFBSyxlQUFlLEVBQUUsTUFBRztRQUNwQyxxQkFBcUIsRUFBRSw0Q0FBNEM7UUFDbkUsbUJBQW1CLEVBQUU7WUFDbkIsT0FBTyxFQUFFLE9BQU87U0FDakI7UUFDRCxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUM7UUFDaEIsY0FBYyxFQUFFLEdBQUc7UUFDbkIsU0FBUyxFQUFFLEtBQUs7UUFDaEIsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFO0tBQzFDO0lBQ0QsTUFBTSxFQUFFO1FBQ04sSUFBSSxFQUFFLFFBQVE7UUFDZCxHQUFHLEVBQUUsY0FBYztRQUNuQixxQkFBcUIsRUFBRSw4Q0FBOEM7UUFDckUsbUJBQW1CLEVBQUU7WUFDbkIsT0FBTyxFQUFFLE9BQU87WUFDaEIsTUFBTSxFQUFFLFNBQVM7WUFDakIsVUFBVSxFQUFFLFNBQVM7WUFDckIsV0FBVyxFQUFFLFNBQVM7WUFDdEIsc0JBQXNCLEVBQUUsU0FBUztZQUNqQyxjQUFjLEVBQUUsU0FBUztZQUN6QixFQUFFLEVBQUUsU0FBUztTQUNkO1FBQ0QsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQztRQUMxQixjQUFjLEVBQUUsR0FBRztRQUNuQixTQUFTLEVBQUUsS0FBSztRQUNoQixZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUU7UUFDekMsS0FBSyxNQUtGO0tBQ0o7SUFDRCxNQUFNLEVBQUU7UUFDTixJQUFJLEVBQUUsUUFBUTtRQUNkLEdBQUcsRUFBRSxjQUFjO1FBQ25CLHFCQUFxQixFQUFFLDBDQUEwQztRQUNqRSxLQUFLLEVBQUUsQ0FBQyxZQUFZLENBQUM7UUFDckIsY0FBYyxFQUFFLEdBQUc7UUFDbkIsU0FBUyxFQUFFLEtBQUs7UUFDaEIsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFO0tBQzNDO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsSUFBSSxFQUFFLFdBQVc7UUFDakIsR0FBRyxFQUFFLGlCQUFpQjtRQUN0QixxQkFBcUIsRUFBRSwyQ0FBMkM7UUFDbEUsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDO1FBQ2hCLGNBQWMsRUFBRSxHQUFHO1FBQ25CLFNBQVMsRUFBRSxLQUFLO0tBQ2pCO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsSUFBSSxFQUFFLFVBQVU7UUFDaEIsR0FBRyxFQUFFLGdCQUFnQjtRQUNyQixxQkFBcUIsRUFBRSxtREFBbUQ7UUFDMUUsS0FBSyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7UUFDekIsY0FBYyxFQUFFLEdBQUc7UUFDbkIsU0FBUyxFQUFFLEtBQUs7UUFDaEIsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFO1FBQ3pDLEtBQUssRUFBRSxPQUFPO0tBQ2Y7SUFDRCxPQUFPLEVBQUU7UUFDUCxJQUFJLEVBQUUsU0FBUztRQUNmLEdBQUcsRUFBRSxlQUFlO1FBQ3BCLHFCQUFxQixFQUFFLDRDQUE0QztRQUNuRSxTQUFTLEVBQUUsS0FBSztRQUNoQixZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUU7S0FDMUM7SUFDRCxNQUFNLEVBQUU7UUFDTixJQUFJLEVBQUUsUUFBUTtRQUNkLEdBQUcsRUFBRSxjQUFjO1FBQ25CLHFCQUFxQixFQUFFLCtDQUErQztRQUN0RSxLQUFLLEVBQUUsQ0FBQyxXQUFXLENBQUM7UUFDcEIsY0FBYyxFQUFFLEdBQUc7UUFDbkIsbUJBQW1CLEVBQUU7WUFDbkIsT0FBTyxFQUFFLE9BQU87U0FDakI7UUFDRCxTQUFTLEVBQUUsS0FBSztRQUNoQixZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUU7S0FDMUM7SUFDRCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsTUFBTTtRQUNaLEdBQUcsRUFBRSxZQUFZO1FBQ2pCLHFCQUFxQixFQUFFLDhDQUE4QztRQUNyRSxtQkFBbUIsRUFBRTtZQUNuQixPQUFPLEVBQUUsT0FBTztTQUNqQjtRQUNELEtBQUssRUFBRSxDQUFDLFdBQVcsQ0FBQztRQUNwQixjQUFjLEVBQUUsR0FBRztRQUNuQixTQUFTLEVBQUUsS0FBSztRQUNoQixZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUU7S0FDMUM7SUFDRCxLQUFLLEVBQUU7UUFDTCxJQUFJLEVBQUUsT0FBTztRQUNiLEdBQUcsRUFBRSxhQUFhO1FBQ2xCLHFCQUFxQixFQUFFLGlEQUFpRDtRQUN4RSxLQUFLLEVBQUUsRUFBRTtRQUNULGNBQWMsRUFBRSxHQUFHO1FBQ25CLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLFlBQVksRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtLQUMxQztJQUNELFNBQVMsRUFBRTtRQUNULElBQUksRUFBRSxXQUFXO1FBQ2pCLEdBQUcsRUFBRSxpQkFBaUI7UUFDdEIscUJBQXFCLEVBQUUsNkNBQTZDO1FBQ3BFLFdBQVcsRUFBSyxlQUFlLEVBQUUsTUFBRztRQUNwQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUM7UUFDaEIsY0FBYyxFQUFFLEdBQUc7UUFDbkIsU0FBUyxFQUFFLEtBQUs7UUFDaEIsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFO0tBQzNDO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsSUFBSSxFQUFFLFNBQVM7UUFDZixHQUFHLEVBQUUsZUFBZTtRQUNwQixxQkFBcUIsRUFBRSx3Q0FBd0M7UUFDL0QsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLGlCQUFpQixDQUFDO1FBQzlCLGNBQWMsRUFBRSxHQUFHO1FBQ25CLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLFlBQVksRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtRQUN6QyxLQUFLLE1BS0Y7S0FDSjtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVByb3ZpZGVycyB9IGZyb20gJy4uL3B1YmxpY19hcGknO1xuaW1wb3J0IHsgZ2V0V2luZG93T3JpZ2luIH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0UHJvdmlkZXJzOiBJUHJvdmlkZXJzID0ge1xuICBmYWNlYm9vazoge1xuICAgIG5hbWU6ICdmYWNlYm9vaycsXG4gICAgdXJsOiAnL2F1dGgvZmFjZWJvb2snLFxuICAgIHJlZGlyZWN0VXJpOiBgJHtnZXRXaW5kb3dPcmlnaW4oKX0vYCxcbiAgICBhdXRob3JpemF0aW9uRW5kcG9pbnQ6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vdjIuNS9kaWFsb2cvb2F1dGgnLFxuICAgIGFkZGl0aW9uYWxVcmxQYXJhbXM6IHtcbiAgICAgIGRpc3BsYXk6ICdwb3B1cCdcbiAgICB9LFxuICAgIHNjb3BlOiBbJ2VtYWlsJ10sXG4gICAgc2NvcGVEZWxpbWl0ZXI6ICcsJyxcbiAgICBvYXV0aFR5cGU6ICcyLjAnLFxuICAgIHBvcHVwT3B0aW9uczogeyB3aWR0aDogNTgwLCBoZWlnaHQ6IDQwMCB9XG4gIH0sXG4gIGdvb2dsZToge1xuICAgIG5hbWU6ICdnb29nbGUnLFxuICAgIHVybDogJy9hdXRoL2dvb2dsZScsXG4gICAgYXV0aG9yaXphdGlvbkVuZHBvaW50OiAnaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tL28vb2F1dGgyL3YyL2F1dGgnLFxuICAgIGFkZGl0aW9uYWxVcmxQYXJhbXM6IHtcbiAgICAgIGRpc3BsYXk6ICdwb3B1cCcsXG4gICAgICBwcm9tcHQ6IHVuZGVmaW5lZCxcbiAgICAgIGxvZ2luX2hpbnQ6IHVuZGVmaW5lZCxcbiAgICAgIGFjY2Vzc190eXBlOiB1bmRlZmluZWQsXG4gICAgICBpbmNsdWRlX2dyYW50ZWRfc2NvcGVzOiB1bmRlZmluZWQsXG4gICAgICAnb3BlbmlkLnJlYWxtJzogdW5kZWZpbmVkLFxuICAgICAgaGQ6IHVuZGVmaW5lZFxuICAgIH0sXG4gICAgc2NvcGU6IFsnb3BlbmlkJywgJ2VtYWlsJ10sXG4gICAgc2NvcGVEZWxpbWl0ZXI6ICcgJyxcbiAgICBvYXV0aFR5cGU6ICcyLjAnLFxuICAgIHBvcHVwT3B0aW9uczogeyB3aWR0aDogNDUyLCBoZWlnaHQ6IDYzMyB9LFxuICAgIHN0YXRlOiAoKSA9PlxuICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KFxuICAgICAgICBNYXRoLnJhbmRvbSgpXG4gICAgICAgICAgLnRvU3RyaW5nKDM2KVxuICAgICAgICAgIC5zdWJzdHIoMilcbiAgICAgIClcbiAgfSxcbiAgZ2l0aHViOiB7XG4gICAgbmFtZTogJ2dpdGh1YicsXG4gICAgdXJsOiAnL2F1dGgvZ2l0aHViJyxcbiAgICBhdXRob3JpemF0aW9uRW5kcG9pbnQ6ICdodHRwczovL2dpdGh1Yi5jb20vbG9naW4vb2F1dGgvYXV0aG9yaXplJyxcbiAgICBzY29wZTogWyd1c2VyOmVtYWlsJ10sXG4gICAgc2NvcGVEZWxpbWl0ZXI6ICcgJyxcbiAgICBvYXV0aFR5cGU6ICcyLjAnLFxuICAgIHBvcHVwT3B0aW9uczogeyB3aWR0aDogMTAyMCwgaGVpZ2h0OiA2MTggfVxuICB9LFxuICBpbnN0YWdyYW06IHtcbiAgICBuYW1lOiAnaW5zdGFncmFtJyxcbiAgICB1cmw6ICcvYXV0aC9pbnN0YWdyYW0nLFxuICAgIGF1dGhvcml6YXRpb25FbmRwb2ludDogJ2h0dHBzOi8vYXBpLmluc3RhZ3JhbS5jb20vb2F1dGgvYXV0aG9yaXplJyxcbiAgICBzY29wZTogWydiYXNpYyddLFxuICAgIHNjb3BlRGVsaW1pdGVyOiAnKycsXG4gICAgb2F1dGhUeXBlOiAnMi4wJ1xuICB9LFxuICBsaW5rZWRpbjoge1xuICAgIG5hbWU6ICdsaW5rZWRpbicsXG4gICAgdXJsOiAnL2F1dGgvbGlua2VkaW4nLFxuICAgIGF1dGhvcml6YXRpb25FbmRwb2ludDogJ2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS91YXMvb2F1dGgyL2F1dGhvcml6YXRpb24nLFxuICAgIHNjb3BlOiBbJ3JfZW1haWxhZGRyZXNzJ10sXG4gICAgc2NvcGVEZWxpbWl0ZXI6ICcgJyxcbiAgICBvYXV0aFR5cGU6ICcyLjAnLFxuICAgIHBvcHVwT3B0aW9uczogeyB3aWR0aDogNTI3LCBoZWlnaHQ6IDU4MiB9LFxuICAgIHN0YXRlOiAnU1RBVEUnXG4gIH0sXG4gIHR3aXR0ZXI6IHtcbiAgICBuYW1lOiAndHdpdHRlcicsXG4gICAgdXJsOiAnL2F1dGgvdHdpdHRlcicsXG4gICAgYXV0aG9yaXphdGlvbkVuZHBvaW50OiAnaHR0cHM6Ly9hcGkudHdpdHRlci5jb20vb2F1dGgvYXV0aGVudGljYXRlJyxcbiAgICBvYXV0aFR5cGU6ICcxLjAnLFxuICAgIHBvcHVwT3B0aW9uczogeyB3aWR0aDogNDk1LCBoZWlnaHQ6IDY0NSB9XG4gIH0sXG4gIHR3aXRjaDoge1xuICAgIG5hbWU6ICd0d2l0Y2gnLFxuICAgIHVybDogJy9hdXRoL3R3aXRjaCcsXG4gICAgYXV0aG9yaXphdGlvbkVuZHBvaW50OiAnaHR0cHM6Ly9hcGkudHdpdGNoLnR2L2tyYWtlbi9vYXV0aDIvYXV0aG9yaXplJyxcbiAgICBzY29wZTogWyd1c2VyX3JlYWQnXSxcbiAgICBzY29wZURlbGltaXRlcjogJyAnLFxuICAgIGFkZGl0aW9uYWxVcmxQYXJhbXM6IHtcbiAgICAgIGRpc3BsYXk6ICdwb3B1cCdcbiAgICB9LFxuICAgIG9hdXRoVHlwZTogJzIuMCcsXG4gICAgcG9wdXBPcHRpb25zOiB7IHdpZHRoOiA1MDAsIGhlaWdodDogNTYwIH1cbiAgfSxcbiAgbGl2ZToge1xuICAgIG5hbWU6ICdsaXZlJyxcbiAgICB1cmw6ICcvYXV0aC9saXZlJyxcbiAgICBhdXRob3JpemF0aW9uRW5kcG9pbnQ6ICdodHRwczovL2xvZ2luLmxpdmUuY29tL29hdXRoMjBfYXV0aG9yaXplLnNyZicsXG4gICAgYWRkaXRpb25hbFVybFBhcmFtczoge1xuICAgICAgZGlzcGxheTogJ3BvcHVwJ1xuICAgIH0sXG4gICAgc2NvcGU6IFsnd2wuZW1haWxzJ10sXG4gICAgc2NvcGVEZWxpbWl0ZXI6ICcgJyxcbiAgICBvYXV0aFR5cGU6ICcyLjAnLFxuICAgIHBvcHVwT3B0aW9uczogeyB3aWR0aDogNTAwLCBoZWlnaHQ6IDU2MCB9XG4gIH0sXG4gIHlhaG9vOiB7XG4gICAgbmFtZTogJ3lhaG9vJyxcbiAgICB1cmw6ICcvYXV0aC95YWhvbycsXG4gICAgYXV0aG9yaXphdGlvbkVuZHBvaW50OiAnaHR0cHM6Ly9hcGkubG9naW4ueWFob28uY29tL29hdXRoMi9yZXF1ZXN0X2F1dGgnLFxuICAgIHNjb3BlOiBbXSxcbiAgICBzY29wZURlbGltaXRlcjogJywnLFxuICAgIG9hdXRoVHlwZTogJzIuMCcsXG4gICAgcG9wdXBPcHRpb25zOiB7IHdpZHRoOiA1NTksIGhlaWdodDogNTE5IH1cbiAgfSxcbiAgYml0YnVja2V0OiB7XG4gICAgbmFtZTogJ2JpdGJ1Y2tldCcsXG4gICAgdXJsOiAnL2F1dGgvYml0YnVja2V0JyxcbiAgICBhdXRob3JpemF0aW9uRW5kcG9pbnQ6ICdodHRwczovL2JpdGJ1Y2tldC5vcmcvc2l0ZS9vYXV0aDIvYXV0aG9yaXplJyxcbiAgICByZWRpcmVjdFVyaTogYCR7Z2V0V2luZG93T3JpZ2luKCl9L2AsXG4gICAgc2NvcGU6IFsnZW1haWwnXSxcbiAgICBzY29wZURlbGltaXRlcjogJywnLFxuICAgIG9hdXRoVHlwZTogJzIuMCcsXG4gICAgcG9wdXBPcHRpb25zOiB7IHdpZHRoOiAxMDI4LCBoZWlnaHQ6IDUyOSB9XG4gIH0sXG4gIHNwb3RpZnk6IHtcbiAgICBuYW1lOiAnc3BvdGlmeScsXG4gICAgdXJsOiAnL2F1dGgvc3BvdGlmeScsXG4gICAgYXV0aG9yaXphdGlvbkVuZHBvaW50OiAnaHR0cHM6Ly9hY2NvdW50cy5zcG90aWZ5LmNvbS9hdXRob3JpemUnLFxuICAgIHNjb3BlOiBbJycsICd1c2VyLXJlYWQtZW1haWwnXSxcbiAgICBzY29wZURlbGltaXRlcjogJywnLFxuICAgIG9hdXRoVHlwZTogJzIuMCcsXG4gICAgcG9wdXBPcHRpb25zOiB7IHdpZHRoOiA1MDAsIGhlaWdodDogNTMwIH0sXG4gICAgc3RhdGU6ICgpID0+XG4gICAgICBlbmNvZGVVUklDb21wb25lbnQoXG4gICAgICAgIE1hdGgucmFuZG9tKClcbiAgICAgICAgICAudG9TdHJpbmcoMzYpXG4gICAgICAgICAgLnN1YnN0cigyKVxuICAgICAgKVxuICB9XG59O1xuIl19