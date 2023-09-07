package com.dzykov.config;

import lombok.Getter;

public final class Endpoints {

    private Endpoints(){

    }

    // Paths
    @Getter static public final String baseUrl = "/api";
    @Getter static public final String allEndings = "/**";
    @Getter static public final String auth = "/auth";
    @Getter static public final String management = "/management";
    @Getter static public final String secure = "/secure";
    @Getter static public final String general = "/general";
    @Getter static public final String user = "/user";
    @Getter static public final String cart = "/cart";
    @Getter static public final String items = "/item";
    @Getter static public final String logout = "/logout";

    // Endpoints
    @Getter static public final String managementEndpoint = baseUrl + management;
    @Getter static public final String generalEndpoint = baseUrl + general;
    @Getter static public final String secureEndpoint = baseUrl + secure;
    @Getter static public final String authEndpoint = baseUrl + auth;
    @Getter static public final String userEndpoint = baseUrl + user;
    @Getter static public final String cartEndpoint = baseUrl + cart;
    @Getter static public final String itemsEndpoint = baseUrl + items;
    @Getter static public final String logoutEndpoint = baseUrl + logout;

}
