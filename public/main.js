(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Models/file-item.ts":
/*!*************************************!*\
  !*** ./src/app/Models/file-item.ts ***!
  \*************************************/
/*! exports provided: FileItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileItem", function() { return FileItem; });
var FileItem = /** @class */ (function () {
    function FileItem(archivo) {
        this.adjunto = archivo;
        this.nombreAdjunto = archivo.name;
        this.estaSubiendo = false;
        this.progreso = 0;
    }
    return FileItem;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_proyectos_proyectos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/proyectos/proyectos.component */ "./src/app/components/proyectos/proyectos.component.ts");
/* harmony import */ var _components_control_acceso_control_acceso_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/control-acceso/control-acceso.component */ "./src/app/components/control-acceso/control-acceso.component.ts");
/* harmony import */ var _components_shared_navbar_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/shared/navbar/login/login.component */ "./src/app/components/shared/navbar/login/login.component.ts");
/* harmony import */ var _components_control_acceso_registar_registar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/control-acceso/registar/registar.component */ "./src/app/components/control-acceso/registar/registar.component.ts");
/* harmony import */ var _components_control_acceso_listar_listar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/control-acceso/listar/listar.component */ "./src/app/components/control-acceso/listar/listar.component.ts");
/* harmony import */ var _components_control_acceso_listar_visualizar_usuario_visualizar_usuario_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/control-acceso/listar/visualizar-usuario/visualizar-usuario.component */ "./src/app/components/control-acceso/listar/visualizar-usuario/visualizar-usuario.component.ts");
/* harmony import */ var _components_control_acceso_listar_modificar_usuario_modificar_usuario_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/control-acceso/listar/modificar-usuario/modificar-usuario.component */ "./src/app/components/control-acceso/listar/modificar-usuario/modificar-usuario.component.ts");
/* harmony import */ var _components_proyectos_nuevo_proyecto_nuevo_proyecto_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/proyectos/nuevo-proyecto/nuevo-proyecto.component */ "./src/app/components/proyectos/nuevo-proyecto/nuevo-proyecto.component.ts");
/* harmony import */ var _components_proyectos_listar_proyecto_listar_proyecto_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/proyectos/listar-proyecto/listar-proyecto.component */ "./src/app/components/proyectos/listar-proyecto/listar-proyecto.component.ts");
/* harmony import */ var _components_proyectos_listar_proyecto_visualizar_proyecto_visualizar_proyecto_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/proyectos/listar-proyecto/visualizar-proyecto/visualizar-proyecto.component */ "./src/app/components/proyectos/listar-proyecto/visualizar-proyecto/visualizar-proyecto.component.ts");
/* harmony import */ var _components_proyectos_listar_proyecto_modificar_proyecto_modificar_proyecto_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/proyectos/listar-proyecto/modificar-proyecto/modificar-proyecto.component */ "./src/app/components/proyectos/listar-proyecto/modificar-proyecto/modificar-proyecto.component.ts");
/* harmony import */ var _components_gestion_clientes_gestion_clientes_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/gestion-clientes/gestion-clientes.component */ "./src/app/components/gestion-clientes/gestion-clientes.component.ts");
/* harmony import */ var _components_gestion_clientes_crear_cliente_crear_cliente_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/gestion-clientes/crear-cliente/crear-cliente.component */ "./src/app/components/gestion-clientes/crear-cliente/crear-cliente.component.ts");
/* harmony import */ var _components_gestion_clientes_listar_cliente_listar_cliente_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/gestion-clientes/listar-cliente/listar-cliente.component */ "./src/app/components/gestion-clientes/listar-cliente/listar-cliente.component.ts");
/* harmony import */ var _components_gestion_clientes_listar_cliente_visualizar_cliente_visualizar_cliente_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/gestion-clientes/listar-cliente/visualizar-cliente/visualizar-cliente.component */ "./src/app/components/gestion-clientes/listar-cliente/visualizar-cliente/visualizar-cliente.component.ts");
/* harmony import */ var _components_gestion_clientes_listar_cliente_modificar_cliente_modificar_cliente_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/gestion-clientes/listar-cliente/modificar-cliente/modificar-cliente.component */ "./src/app/components/gestion-clientes/listar-cliente/modificar-cliente/modificar-cliente.component.ts");
/* harmony import */ var _components_proyectos_listar_proyecto_visualizar_proyecto_info_cliente_info_cliente_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/proyectos/listar-proyecto/visualizar-proyecto/info-cliente/info-cliente.component */ "./src/app/components/proyectos/listar-proyecto/visualizar-proyecto/info-cliente/info-cliente.component.ts");
/* harmony import */ var _components_proyectos_listar_proyecto_visualizar_proyecto_info_adjuntos_info_adjuntos_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/proyectos/listar-proyecto/visualizar-proyecto/info-adjuntos/info-adjuntos.component */ "./src/app/components/proyectos/listar-proyecto/visualizar-proyecto/info-adjuntos/info-adjuntos.component.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _components_buscador_buscador_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/buscador/buscador.component */ "./src/app/components/buscador/buscador.component.ts");
/* harmony import */ var _components_proyectos_upload_form_upload_form_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/proyectos/upload-form/upload-form.component */ "./src/app/components/proyectos/upload-form/upload-form.component.ts");
/* harmony import */ var _components_consult_consult_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/consult/consult.component */ "./src/app/components/consult/consult.component.ts");
/* harmony import */ var _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/shared/navbar/navbar.component */ "./src/app/components/shared/navbar/navbar.component.ts");
/* harmony import */ var _components_consult_home_consult_home_consult_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/consult/home-consult/home-consult.component */ "./src/app/components/consult/home-consult/home-consult.component.ts");
/* harmony import */ var _components_consult_proyectos_consult_proyectos_consult_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/consult/proyectos-consult/proyectos-consult.component */ "./src/app/components/consult/proyectos-consult/proyectos-consult.component.ts");
/* harmony import */ var _components_consult_proyectos_consult_listarproyectos_consult_listarproyectos_consult_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/consult/proyectos-consult/listarproyectos-consult/listarproyectos-consult.component */ "./src/app/components/consult/proyectos-consult/listarproyectos-consult/listarproyectos-consult.component.ts");
/* harmony import */ var _components_consult_perfil_consult_perfil_consult_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/consult/perfil-consult/perfil-consult.component */ "./src/app/components/consult/perfil-consult/perfil-consult.component.ts");
/* harmony import */ var _components_admin_home_admin_home_admin_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/admin/home-admin/home-admin.component */ "./src/app/components/admin/home-admin/home-admin.component.ts");
/* harmony import */ var _components_admin_proyectos_admin_proyectos_admin_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/admin/proyectos-admin/proyectos-admin.component */ "./src/app/components/admin/proyectos-admin/proyectos-admin.component.ts");
/* harmony import */ var _components_admin_proyectos_admin_listarproyectos_admin_listarproyectos_admin_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/admin/proyectos-admin/listarproyectos-admin/listarproyectos-admin.component */ "./src/app/components/admin/proyectos-admin/listarproyectos-admin/listarproyectos-admin.component.ts");
/* harmony import */ var _components_admin_gestion_clientes_admin_gestion_clientes_admin_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/admin/gestion-clientes-admin/gestion-clientes-admin.component */ "./src/app/components/admin/gestion-clientes-admin/gestion-clientes-admin.component.ts");
/* harmony import */ var _components_admin_control_acceso_admin_control_acceso_admin_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/admin/control-acceso-admin/control-acceso-admin.component */ "./src/app/components/admin/control-acceso-admin/control-acceso-admin.component.ts");
/* harmony import */ var _components_admin_perfil_admin_perfil_admin_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/admin/perfil-admin/perfil-admin.component */ "./src/app/components/admin/perfil-admin/perfil-admin.component.ts");
/* harmony import */ var _components_consult_buscador_consult_buscador_consult_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/consult/buscador-consult/buscador-consult.component */ "./src/app/components/consult/buscador-consult/buscador-consult.component.ts");
/* harmony import */ var _components_admin_buscador_admin_buscador_admin_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/admin/buscador-admin/buscador-admin.component */ "./src/app/components/admin/buscador-admin/buscador-admin.component.ts");
/* harmony import */ var _components_consult_proyectos_consult_listarproyectos_consult_visualizar_proyectos_consult_visualizar_proyectos_consult_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/consult/proyectos-consult/listarproyectos-consult/visualizar-proyectos-consult/visualizar-proyectos-consult.component */ "./src/app/components/consult/proyectos-consult/listarproyectos-consult/visualizar-proyectos-consult/visualizar-proyectos-consult.component.ts");
/* harmony import */ var _components_consult_proyectos_consult_listarproyectos_consult_visualizar_proyectos_consult_info_adjuntos_consult_info_adjuntos_consult_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/consult/proyectos-consult/listarproyectos-consult/visualizar-proyectos-consult/info-adjuntos-consult/info-adjuntos-consult.component */ "./src/app/components/consult/proyectos-consult/listarproyectos-consult/visualizar-proyectos-consult/info-adjuntos-consult/info-adjuntos-consult.component.ts");
/* harmony import */ var _components_consult_proyectos_consult_listarproyectos_consult_visualizar_proyectos_consult_info_cliente_consult_info_cliente_consult_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/consult/proyectos-consult/listarproyectos-consult/visualizar-proyectos-consult/info-cliente-consult/info-cliente-consult.component */ "./src/app/components/consult/proyectos-consult/listarproyectos-consult/visualizar-proyectos-consult/info-cliente-consult/info-cliente-consult.component.ts");
/* harmony import */ var _components_admin_proyectos_admin_listarproyectos_admin_visualizar_proyectos_admin_visualizar_proyectos_admin_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/admin/proyectos-admin/listarproyectos-admin/visualizar-proyectos-admin/visualizar-proyectos-admin.component */ "./src/app/components/admin/proyectos-admin/listarproyectos-admin/visualizar-proyectos-admin/visualizar-proyectos-admin.component.ts");
/* harmony import */ var _components_admin_proyectos_admin_listarproyectos_admin_visualizar_proyectos_admin_info_cliente_admin_info_cliente_admin_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/admin/proyectos-admin/listarproyectos-admin/visualizar-proyectos-admin/info-cliente-admin/info-cliente-admin.component */ "./src/app/components/admin/proyectos-admin/listarproyectos-admin/visualizar-proyectos-admin/info-cliente-admin/info-cliente-admin.component.ts");
/* harmony import */ var _components_admin_proyectos_admin_listarproyectos_admin_visualizar_proyectos_admin_info_adjuntos_admin_info_adjuntos_admin_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/admin/proyectos-admin/listarproyectos-admin/visualizar-proyectos-admin/info-adjuntos-admin/info-adjuntos-admin.component */ "./src/app/components/admin/proyectos-admin/listarproyectos-admin/visualizar-proyectos-admin/info-adjuntos-admin/info-adjuntos-admin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























// tslint:disable-next-line:max-line-length










// tslint:disable-next-line:max-line-length

// tslint:disable-next-line:max-line-length

// tslint:disable-next-line:max-line-length

// tslint:disable-next-line:max-line-length

// tslint:disable-next-line:max-line-length

// tslint:disable-next-line:max-line-length

var routes = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'homeConsult', component: _components_consult_home_consult_home_consult_component__WEBPACK_IMPORTED_MODULE_27__["HomeConsultComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]] },
    { path: 'homeAdmin', component: _components_admin_home_admin_home_admin_component__WEBPACK_IMPORTED_MODULE_31__["HomeAdminComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]] },
    { path: 'proyectos', component: _components_proyectos_proyectos_component__WEBPACK_IMPORTED_MODULE_3__["ProyectosComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]] },
    { path: 'proyectosConsult', component: _components_consult_proyectos_consult_proyectos_consult_component__WEBPACK_IMPORTED_MODULE_28__["ProyectosConsultComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]] },
    { path: 'proyectosAdmin', component: _components_admin_proyectos_admin_proyectos_admin_component__WEBPACK_IMPORTED_MODULE_32__["ProyectosAdminComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]] },
    { path: 'controlAcceso', component: _components_control_acceso_control_acceso_component__WEBPACK_IMPORTED_MODULE_4__["ControlAccesoComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]] },
    { path: 'controlAccesoAdmin', component: _components_admin_control_acceso_admin_control_acceso_admin_component__WEBPACK_IMPORTED_MODULE_35__["ControlAccesoAdminComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]] },
    { path: 'login', component: _components_shared_navbar_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'registar', component: _components_control_acceso_registar_registar_component__WEBPACK_IMPORTED_MODULE_6__["RegistarComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]] },
    { path: 'listar', component: _components_control_acceso_listar_listar_component__WEBPACK_IMPORTED_MODULE_7__["ListarComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]] },
    { path: 'visualizarUsuario/:email', component: _components_control_acceso_listar_visualizar_usuario_visualizar_usuario_component__WEBPACK_IMPORTED_MODULE_8__["VisualizarUsuarioComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]] },
    { path: 'modificarUsuario/:email', component: _components_control_acceso_listar_modificar_usuario_modificar_usuario_component__WEBPACK_IMPORTED_MODULE_9__["ModificarUsuarioComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]] },
    { path: 'nuevoProyecto', component: _components_proyectos_nuevo_proyecto_nuevo_proyecto_component__WEBPACK_IMPORTED_MODULE_10__["NuevoProyectoComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]] },
    { path: 'listarProyecto', component: _components_proyectos_listar_proyecto_listar_proyecto_component__WEBPACK_IMPORTED_MODULE_11__["ListarProyectoComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]] },
    { path: 'listarProyectosConsult', component: _components_consult_proyectos_consult_listarproyectos_consult_listarproyectos_consult_component__WEBPACK_IMPORTED_MODULE_29__["ListarproyectosConsultComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]] },
    { path: 'listarProyectosAdmin', component: _components_admin_proyectos_admin_listarproyectos_admin_listarproyectos_admin_component__WEBPACK_IMPORTED_MODULE_33__["ListarproyectosAdminComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]] },
    { path: 'VisualizarProyecto/:codigo', component: _components_proyectos_listar_proyecto_visualizar_proyecto_visualizar_proyecto_component__WEBPACK_IMPORTED_MODULE_12__["VisualizarProyectoComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]] },
    { path: 'VisualizarProyectoConsult/:codigo', component: _components_consult_proyectos_consult_listarproyectos_consult_visualizar_proyectos_consult_visualizar_proyectos_consult_component__WEBPACK_IMPORTED_MODULE_39__["VisualizarProyectosConsultComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]] },
    { path: 'VisualizarProyectoAdmin/:codigo', component: _components_admin_proyectos_admin_listarproyectos_admin_visualizar_proyectos_admin_visualizar_proyectos_admin_component__WEBPACK_IMPORTED_MODULE_42__["VisualizarProyectosAdminComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]] },
    { path: 'modificarProyecto/:codigo', component: _components_proyectos_listar_proyecto_modificar_proyecto_modificar_proyecto_component__WEBPACK_IMPORTED_MODULE_13__["ModificarProyectoComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]] },
    { path: 'gestionClientes', component: _components_gestion_clientes_gestion_clientes_component__WEBPACK_IMPORTED_MODULE_14__["GestionClientesComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]] },
    { path: 'gestionClientesAdmin', component: _components_admin_gestion_clientes_admin_gestion_clientes_admin_component__WEBPACK_IMPORTED_MODULE_34__["GestionClientesAdminComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]] },
    { path: 'crearCliente', component: _components_gestion_clientes_crear_cliente_crear_cliente_component__WEBPACK_IMPORTED_MODULE_15__["CrearClienteComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]] },
    { path: 'listarCliente', component: _components_gestion_clientes_listar_cliente_listar_cliente_component__WEBPACK_IMPORTED_MODULE_16__["ListarClienteComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]] },
    { path: 'visualizarCliente/:codigo', component: _components_gestion_clientes_listar_cliente_visualizar_cliente_visualizar_cliente_component__WEBPACK_IMPORTED_MODULE_17__["VisualizarClienteComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]] },
    { path: 'modificarCliente/:codigo', component: _components_gestion_clientes_listar_cliente_modificar_cliente_modificar_cliente_component__WEBPACK_IMPORTED_MODULE_18__["ModificarClienteComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]] },
    { path: 'infoCliente/:cliente', component: _components_proyectos_listar_proyecto_visualizar_proyecto_info_cliente_info_cliente_component__WEBPACK_IMPORTED_MODULE_19__["InfoClienteComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]] },
    { path: 'infoClienteConsult/:cliente', component: _components_consult_proyectos_consult_listarproyectos_consult_visualizar_proyectos_consult_info_cliente_consult_info_cliente_consult_component__WEBPACK_IMPORTED_MODULE_41__["InfoClienteConsultComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]] },
    { path: 'infoClienteAdmin/:cliente', component: _components_admin_proyectos_admin_listarproyectos_admin_visualizar_proyectos_admin_info_cliente_admin_info_cliente_admin_component__WEBPACK_IMPORTED_MODULE_43__["InfoClienteAdminComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]] },
    { path: 'infoAdjuntos/:codigo', component: _components_proyectos_listar_proyecto_visualizar_proyecto_info_adjuntos_info_adjuntos_component__WEBPACK_IMPORTED_MODULE_20__["InfoAdjuntosComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]] },
    { path: 'infoAdjuntosConsult/:codigo', component: _components_consult_proyectos_consult_listarproyectos_consult_visualizar_proyectos_consult_info_adjuntos_consult_info_adjuntos_consult_component__WEBPACK_IMPORTED_MODULE_40__["InfoAdjuntosConsultComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]] },
    { path: 'info/Adjuntos/Admin/:codigo', component: _components_admin_proyectos_admin_listarproyectos_admin_visualizar_proyectos_admin_info_adjuntos_admin_info_adjuntos_admin_component__WEBPACK_IMPORTED_MODULE_44__["InfoAdjuntosAdminComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]] },
    { path: 'admin', component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_21__["AdminComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]] },
    { path: 'consult', component: _components_consult_consult_component__WEBPACK_IMPORTED_MODULE_25__["ConsultComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]] },
    { path: 'buscador/:termino', component: _components_buscador_buscador_component__WEBPACK_IMPORTED_MODULE_23__["BuscadorComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]] },
    { path: 'buscadorConsult/:termino', component: _components_consult_buscador_consult_buscador_consult_component__WEBPACK_IMPORTED_MODULE_37__["BuscadorConsultComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]] },
    { path: 'buscadorAdmin/:termino', component: _components_admin_buscador_admin_buscador_admin_component__WEBPACK_IMPORTED_MODULE_38__["BuscadorAdminComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]] },
    { path: 'nuevoProyectoAdjuntos/:codigo', component: _components_proyectos_upload_form_upload_form_component__WEBPACK_IMPORTED_MODULE_24__["UploadFormComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]] },
    { path: 'perfilConsult', component: _components_consult_perfil_consult_perfil_consult_component__WEBPACK_IMPORTED_MODULE_30__["PerfilConsultComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]] },
    { path: 'perfilAdmin', component: _components_admin_perfil_admin_perfil_admin_component__WEBPACK_IMPORTED_MODULE_36__["PerfilAdminComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]] },
    { path: 'navbar', component: _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_26__["NavbarComponent"] },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar>\r\n\r\n</app-navbar>\r\n\r\n\r\n<div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n    <div class=\"loader\" *ngIf=\"preloader.loadings | async\"></div>\r\n</div>\r\n<div class=\"container\">\r\n    <ng-flash-message></ng-flash-message>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_preloader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/preloader.service */ "./src/app/services/preloader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(preloader) {
        this.preloader = preloader;
        this.title = 'App-Web-PMO';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_preloader_service__WEBPACK_IMPORTED_MODULE_1__["PreloaderService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_Cliente_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/Cliente.service */ "./src/app/services/Cliente.service.ts");
/* harmony import */ var _services_proyecto_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/proyecto.service */ "./src/app/services/proyecto.service.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/shared/navbar/navbar.component */ "./src/app/components/shared/navbar/navbar.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_proyectos_proyectos_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/proyectos/proyectos.component */ "./src/app/components/proyectos/proyectos.component.ts");
/* harmony import */ var _components_control_acceso_control_acceso_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/control-acceso/control-acceso.component */ "./src/app/components/control-acceso/control-acceso.component.ts");
/* harmony import */ var _components_shared_navbar_login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/shared/navbar/login/login.component */ "./src/app/components/shared/navbar/login/login.component.ts");
/* harmony import */ var _components_control_acceso_registar_registar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/control-acceso/registar/registar.component */ "./src/app/components/control-acceso/registar/registar.component.ts");
/* harmony import */ var _components_control_acceso_listar_listar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/control-acceso/listar/listar.component */ "./src/app/components/control-acceso/listar/listar.component.ts");
/* harmony import */ var _components_control_acceso_listar_visualizar_usuario_visualizar_usuario_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/control-acceso/listar/visualizar-usuario/visualizar-usuario.component */ "./src/app/components/control-acceso/listar/visualizar-usuario/visualizar-usuario.component.ts");
/* harmony import */ var _components_control_acceso_listar_modificar_usuario_modificar_usuario_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/control-acceso/listar/modificar-usuario/modificar-usuario.component */ "./src/app/components/control-acceso/listar/modificar-usuario/modificar-usuario.component.ts");
/* harmony import */ var _components_proyectos_nuevo_proyecto_nuevo_proyecto_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/proyectos/nuevo-proyecto/nuevo-proyecto.component */ "./src/app/components/proyectos/nuevo-proyecto/nuevo-proyecto.component.ts");
/* harmony import */ var _components_proyectos_listar_proyecto_listar_proyecto_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/proyectos/listar-proyecto/listar-proyecto.component */ "./src/app/components/proyectos/listar-proyecto/listar-proyecto.component.ts");
/* harmony import */ var _components_control_acceso_nav_usuarios_nav_usuarios_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/control-acceso/nav-usuarios/nav-usuarios.component */ "./src/app/components/control-acceso/nav-usuarios/nav-usuarios.component.ts");
/* harmony import */ var _components_proyectos_nav_proyectos_nav_proyectos_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/proyectos/nav-proyectos/nav-proyectos.component */ "./src/app/components/proyectos/nav-proyectos/nav-proyectos.component.ts");
/* harmony import */ var _components_proyectos_listar_proyecto_visualizar_proyecto_visualizar_proyecto_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/proyectos/listar-proyecto/visualizar-proyecto/visualizar-proyecto.component */ "./src/app/components/proyectos/listar-proyecto/visualizar-proyecto/visualizar-proyecto.component.ts");
/* harmony import */ var _components_proyectos_listar_proyecto_modificar_proyecto_modificar_proyecto_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/proyectos/listar-proyecto/modificar-proyecto/modificar-proyecto.component */ "./src/app/components/proyectos/listar-proyecto/modificar-proyecto/modificar-proyecto.component.ts");
/* harmony import */ var _components_gestion_clientes_gestion_clientes_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/gestion-clientes/gestion-clientes.component */ "./src/app/components/gestion-clientes/gestion-clientes.component.ts");
/* harmony import */ var _components_gestion_clientes_crear_cliente_crear_cliente_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/gestion-clientes/crear-cliente/crear-cliente.component */ "./src/app/components/gestion-clientes/crear-cliente/crear-cliente.component.ts");
/* harmony import */ var _components_gestion_clientes_listar_cliente_listar_cliente_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/gestion-clientes/listar-cliente/listar-cliente.component */ "./src/app/components/gestion-clientes/listar-cliente/listar-cliente.component.ts");
/* harmony import */ var _components_gestion_clientes_nav_clientes_nav_clientes_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/gestion-clientes/nav-clientes/nav-clientes.component */ "./src/app/components/gestion-clientes/nav-clientes/nav-clientes.component.ts");
/* harmony import */ var _components_gestion_clientes_listar_cliente_visualizar_cliente_visualizar_cliente_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/gestion-clientes/listar-cliente/visualizar-cliente/visualizar-cliente.component */ "./src/app/components/gestion-clientes/listar-cliente/visualizar-cliente/visualizar-cliente.component.ts");
/* harmony import */ var _components_gestion_clientes_listar_cliente_modificar_cliente_modificar_cliente_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/gestion-clientes/listar-cliente/modificar-cliente/modificar-cliente.component */ "./src/app/components/gestion-clientes/listar-cliente/modificar-cliente/modificar-cliente.component.ts");
/* harmony import */ var _components_proyectos_listar_proyecto_visualizar_proyecto_info_cliente_info_cliente_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/proyectos/listar-proyecto/visualizar-proyecto/info-cliente/info-cliente.component */ "./src/app/components/proyectos/listar-proyecto/visualizar-proyecto/info-cliente/info-cliente.component.ts");
/* harmony import */ var _components_proyectos_listar_proyecto_visualizar_proyecto_info_adjuntos_info_adjuntos_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/proyectos/listar-proyecto/visualizar-proyecto/info-adjuntos/info-adjuntos.component */ "./src/app/components/proyectos/listar-proyecto/visualizar-proyecto/info-adjuntos/info-adjuntos.component.ts");
/* harmony import */ var _components_proyectos_listar_proyecto_visualizar_proyecto_nav_visualizar_proyecto_nav_visualizar_proyecto_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/proyectos/listar-proyecto/visualizar-proyecto/nav-visualizar-proyecto/nav-visualizar-proyecto.component */ "./src/app/components/proyectos/listar-proyecto/visualizar-proyecto/nav-visualizar-proyecto/nav-visualizar-proyecto.component.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _components_buscador_buscador_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/buscador/buscador.component */ "./src/app/components/buscador/buscador.component.ts");
/* harmony import */ var _components_proyectos_upload_form_upload_form_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/proyectos/upload-form/upload-form.component */ "./src/app/components/proyectos/upload-form/upload-form.component.ts");
/* harmony import */ var _components_consult_consult_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/consult/consult.component */ "./src/app/components/consult/consult.component.ts");
/* harmony import */ var _components_shared_nabvar_admin_nabvar_admin_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/shared/nabvar-admin/nabvar-admin.component */ "./src/app/components/shared/nabvar-admin/nabvar-admin.component.ts");
/* harmony import */ var _components_shared_nabvar_consult_nabvar_consult_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/shared/nabvar-consult/nabvar-consult.component */ "./src/app/components/shared/nabvar-consult/nabvar-consult.component.ts");
/* harmony import */ var _components_consult_home_consult_home_consult_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/consult/home-consult/home-consult.component */ "./src/app/components/consult/home-consult/home-consult.component.ts");
/* harmony import */ var _components_consult_proyectos_consult_proyectos_consult_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/consult/proyectos-consult/proyectos-consult.component */ "./src/app/components/consult/proyectos-consult/proyectos-consult.component.ts");
/* harmony import */ var _components_consult_proyectos_consult_listarproyectos_consult_listarproyectos_consult_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./components/consult/proyectos-consult/listarproyectos-consult/listarproyectos-consult.component */ "./src/app/components/consult/proyectos-consult/listarproyectos-consult/listarproyectos-consult.component.ts");
/* harmony import */ var _components_consult_perfil_consult_perfil_consult_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./components/consult/perfil-consult/perfil-consult.component */ "./src/app/components/consult/perfil-consult/perfil-consult.component.ts");
/* harmony import */ var _components_admin_home_admin_home_admin_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./components/admin/home-admin/home-admin.component */ "./src/app/components/admin/home-admin/home-admin.component.ts");
/* harmony import */ var _components_admin_proyectos_admin_proyectos_admin_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./components/admin/proyectos-admin/proyectos-admin.component */ "./src/app/components/admin/proyectos-admin/proyectos-admin.component.ts");
/* harmony import */ var _components_admin_proyectos_admin_listarproyectos_admin_listarproyectos_admin_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./components/admin/proyectos-admin/listarproyectos-admin/listarproyectos-admin.component */ "./src/app/components/admin/proyectos-admin/listarproyectos-admin/listarproyectos-admin.component.ts");
/* harmony import */ var _components_admin_gestion_clientes_admin_gestion_clientes_admin_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./components/admin/gestion-clientes-admin/gestion-clientes-admin.component */ "./src/app/components/admin/gestion-clientes-admin/gestion-clientes-admin.component.ts");
/* harmony import */ var _components_admin_control_acceso_admin_control_acceso_admin_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./components/admin/control-acceso-admin/control-acceso-admin.component */ "./src/app/components/admin/control-acceso-admin/control-acceso-admin.component.ts");
/* harmony import */ var _components_admin_perfil_admin_perfil_admin_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./components/admin/perfil-admin/perfil-admin.component */ "./src/app/components/admin/perfil-admin/perfil-admin.component.ts");
/* harmony import */ var _components_consult_buscador_consult_buscador_consult_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./components/consult/buscador-consult/buscador-consult.component */ "./src/app/components/consult/buscador-consult/buscador-consult.component.ts");
/* harmony import */ var _components_admin_buscador_admin_buscador_admin_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./components/admin/buscador-admin/buscador-admin.component */ "./src/app/components/admin/buscador-admin/buscador-admin.component.ts");
/* harmony import */ var _components_consult_proyectos_consult_listarproyectos_consult_visualizar_proyectos_consult_visualizar_proyectos_consult_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./components/consult/proyectos-consult/listarproyectos-consult/visualizar-proyectos-consult/visualizar-proyectos-consult.component */ "./src/app/components/consult/proyectos-consult/listarproyectos-consult/visualizar-proyectos-consult/visualizar-proyectos-consult.component.ts");
/* harmony import */ var _components_consult_proyectos_consult_listarproyectos_consult_visualizar_proyectos_consult_info_adjuntos_consult_info_adjuntos_consult_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./components/consult/proyectos-consult/listarproyectos-consult/visualizar-proyectos-consult/info-adjuntos-consult/info-adjuntos-consult.component */ "./src/app/components/consult/proyectos-consult/listarproyectos-consult/visualizar-proyectos-consult/info-adjuntos-consult/info-adjuntos-consult.component.ts");
/* harmony import */ var _components_consult_proyectos_consult_listarproyectos_consult_visualizar_proyectos_consult_info_cliente_consult_info_cliente_consult_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./components/consult/proyectos-consult/listarproyectos-consult/visualizar-proyectos-consult/info-cliente-consult/info-cliente-consult.component */ "./src/app/components/consult/proyectos-consult/listarproyectos-consult/visualizar-proyectos-consult/info-cliente-consult/info-cliente-consult.component.ts");
/* harmony import */ var _components_admin_proyectos_admin_listarproyectos_admin_visualizar_proyectos_admin_visualizar_proyectos_admin_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./components/admin/proyectos-admin/listarproyectos-admin/visualizar-proyectos-admin/visualizar-proyectos-admin.component */ "./src/app/components/admin/proyectos-admin/listarproyectos-admin/visualizar-proyectos-admin/visualizar-proyectos-admin.component.ts");
/* harmony import */ var _components_admin_proyectos_admin_listarproyectos_admin_visualizar_proyectos_admin_info_cliente_admin_info_cliente_admin_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./components/admin/proyectos-admin/listarproyectos-admin/visualizar-proyectos-admin/info-cliente-admin/info-cliente-admin.component */ "./src/app/components/admin/proyectos-admin/listarproyectos-admin/visualizar-proyectos-admin/info-cliente-admin/info-cliente-admin.component.ts");
/* harmony import */ var _components_admin_proyectos_admin_listarproyectos_admin_visualizar_proyectos_admin_nav_visualizar_proyecto_admin_nav_visualizar_proyecto_admin_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./components/admin/proyectos-admin/listarproyectos-admin/visualizar-proyectos-admin/nav-visualizar-proyecto-admin/nav-visualizar-proyecto-admin.component */ "./src/app/components/admin/proyectos-admin/listarproyectos-admin/visualizar-proyectos-admin/nav-visualizar-proyecto-admin/nav-visualizar-proyecto-admin.component.ts");
/* harmony import */ var _components_admin_proyectos_admin_listarproyectos_admin_visualizar_proyectos_admin_info_adjuntos_admin_info_adjuntos_admin_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./components/admin/proyectos-admin/listarproyectos-admin/visualizar-proyectos-admin/info-adjuntos-admin/info-adjuntos-admin.component */ "./src/app/components/admin/proyectos-admin/listarproyectos-admin/visualizar-proyectos-admin/info-adjuntos-admin/info-adjuntos-admin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Firebase





// Srevices



// Guards

// Routing

// Forms


























// tslint:disable-next-line:max-line-length










// tslint:disable-next-line:max-line-length










// tslint:disable-next-line:max-line-length

// tslint:disable-next-line:max-line-length

// tslint:disable-next-line:max-line-length

// tslint:disable-next-line:max-line-length

// tslint:disable-next-line:max-line-length

// tslint:disable-next-line:max-line-length

// tslint:disable-next-line:max-line-length

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
                _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__["NavbarComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
                _components_proyectos_proyectos_component__WEBPACK_IMPORTED_MODULE_17__["ProyectosComponent"],
                _components_control_acceso_control_acceso_component__WEBPACK_IMPORTED_MODULE_18__["ControlAccesoComponent"],
                _components_shared_navbar_login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"],
                _components_control_acceso_registar_registar_component__WEBPACK_IMPORTED_MODULE_20__["RegistarComponent"],
                _components_control_acceso_listar_listar_component__WEBPACK_IMPORTED_MODULE_21__["ListarComponent"],
                _components_control_acceso_listar_visualizar_usuario_visualizar_usuario_component__WEBPACK_IMPORTED_MODULE_22__["VisualizarUsuarioComponent"],
                _components_control_acceso_listar_modificar_usuario_modificar_usuario_component__WEBPACK_IMPORTED_MODULE_23__["ModificarUsuarioComponent"],
                _components_proyectos_nuevo_proyecto_nuevo_proyecto_component__WEBPACK_IMPORTED_MODULE_24__["NuevoProyectoComponent"],
                _components_proyectos_listar_proyecto_listar_proyecto_component__WEBPACK_IMPORTED_MODULE_25__["ListarProyectoComponent"],
                _components_control_acceso_nav_usuarios_nav_usuarios_component__WEBPACK_IMPORTED_MODULE_26__["NavUsuariosComponent"],
                _components_proyectos_nav_proyectos_nav_proyectos_component__WEBPACK_IMPORTED_MODULE_27__["NavProyectosComponent"],
                _components_proyectos_listar_proyecto_visualizar_proyecto_visualizar_proyecto_component__WEBPACK_IMPORTED_MODULE_28__["VisualizarProyectoComponent"],
                _components_proyectos_listar_proyecto_modificar_proyecto_modificar_proyecto_component__WEBPACK_IMPORTED_MODULE_29__["ModificarProyectoComponent"],
                _components_gestion_clientes_gestion_clientes_component__WEBPACK_IMPORTED_MODULE_30__["GestionClientesComponent"],
                _components_gestion_clientes_crear_cliente_crear_cliente_component__WEBPACK_IMPORTED_MODULE_31__["CrearClienteComponent"],
                _components_gestion_clientes_listar_cliente_listar_cliente_component__WEBPACK_IMPORTED_MODULE_32__["ListarClienteComponent"],
                _components_gestion_clientes_nav_clientes_nav_clientes_component__WEBPACK_IMPORTED_MODULE_33__["NavClientesComponent"],
                _components_gestion_clientes_listar_cliente_visualizar_cliente_visualizar_cliente_component__WEBPACK_IMPORTED_MODULE_34__["VisualizarClienteComponent"],
                _components_gestion_clientes_listar_cliente_modificar_cliente_modificar_cliente_component__WEBPACK_IMPORTED_MODULE_35__["ModificarClienteComponent"],
                _components_proyectos_listar_proyecto_visualizar_proyecto_info_cliente_info_cliente_component__WEBPACK_IMPORTED_MODULE_36__["InfoClienteComponent"],
                _components_proyectos_listar_proyecto_visualizar_proyecto_info_adjuntos_info_adjuntos_component__WEBPACK_IMPORTED_MODULE_37__["InfoAdjuntosComponent"],
                _components_proyectos_listar_proyecto_visualizar_proyecto_nav_visualizar_proyecto_nav_visualizar_proyecto_component__WEBPACK_IMPORTED_MODULE_38__["NavVisualizarProyectoComponent"],
                _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_39__["AdminComponent"],
                _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_40__["NotFoundComponent"],
                _components_buscador_buscador_component__WEBPACK_IMPORTED_MODULE_41__["BuscadorComponent"],
                _components_proyectos_upload_form_upload_form_component__WEBPACK_IMPORTED_MODULE_42__["UploadFormComponent"],
                _components_consult_consult_component__WEBPACK_IMPORTED_MODULE_43__["ConsultComponent"],
                _components_shared_nabvar_admin_nabvar_admin_component__WEBPACK_IMPORTED_MODULE_44__["NabvarAdminComponent"],
                _components_shared_nabvar_consult_nabvar_consult_component__WEBPACK_IMPORTED_MODULE_45__["NabvarConsultComponent"],
                _components_consult_home_consult_home_consult_component__WEBPACK_IMPORTED_MODULE_46__["HomeConsultComponent"],
                _components_consult_proyectos_consult_proyectos_consult_component__WEBPACK_IMPORTED_MODULE_47__["ProyectosConsultComponent"],
                _components_consult_proyectos_consult_listarproyectos_consult_listarproyectos_consult_component__WEBPACK_IMPORTED_MODULE_48__["ListarproyectosConsultComponent"],
                _components_consult_perfil_consult_perfil_consult_component__WEBPACK_IMPORTED_MODULE_49__["PerfilConsultComponent"],
                _components_admin_home_admin_home_admin_component__WEBPACK_IMPORTED_MODULE_50__["HomeAdminComponent"],
                _components_admin_proyectos_admin_proyectos_admin_component__WEBPACK_IMPORTED_MODULE_51__["ProyectosAdminComponent"],
                _components_admin_proyectos_admin_listarproyectos_admin_listarproyectos_admin_component__WEBPACK_IMPORTED_MODULE_52__["ListarproyectosAdminComponent"],
                _components_admin_gestion_clientes_admin_gestion_clientes_admin_component__WEBPACK_IMPORTED_MODULE_53__["GestionClientesAdminComponent"],
                _components_admin_control_acceso_admin_control_acceso_admin_component__WEBPACK_IMPORTED_MODULE_54__["ControlAccesoAdminComponent"],
                _components_admin_perfil_admin_perfil_admin_component__WEBPACK_IMPORTED_MODULE_55__["PerfilAdminComponent"],
                _components_consult_buscador_consult_buscador_consult_component__WEBPACK_IMPORTED_MODULE_56__["BuscadorConsultComponent"],
                _components_admin_buscador_admin_buscador_admin_component__WEBPACK_IMPORTED_MODULE_57__["BuscadorAdminComponent"],
                _components_consult_proyectos_consult_listarproyectos_consult_visualizar_proyectos_consult_visualizar_proyectos_consult_component__WEBPACK_IMPORTED_MODULE_58__["VisualizarProyectosConsultComponent"],
                _components_consult_proyectos_consult_listarproyectos_consult_visualizar_proyectos_consult_info_adjuntos_consult_info_adjuntos_consult_component__WEBPACK_IMPORTED_MODULE_59__["InfoAdjuntosConsultComponent"],
                _components_consult_proyectos_consult_listarproyectos_consult_visualizar_proyectos_consult_info_cliente_consult_info_cliente_consult_component__WEBPACK_IMPORTED_MODULE_60__["InfoClienteConsultComponent"],
                _components_admin_proyectos_admin_listarproyectos_admin_visualizar_proyectos_admin_visualizar_proyectos_admin_component__WEBPACK_IMPORTED_MODULE_61__["VisualizarProyectosAdminComponent"],
                _components_admin_proyectos_admin_listarproyectos_admin_visualizar_proyectos_admin_info_cliente_admin_info_cliente_admin_component__WEBPACK_IMPORTED_MODULE_62__["InfoClienteAdminComponent"],
                _components_admin_proyectos_admin_listarproyectos_admin_visualizar_proyectos_admin_nav_visualizar_proyecto_admin_nav_visualizar_proyecto_admin_component__WEBPACK_IMPORTED_MODULE_63__["NavVisualizarProyectoAdminComponent"],
                _components_admin_proyectos_admin_listarproyectos_admin_visualizar_proyectos_admin_info_adjuntos_admin_info_adjuntos_admin_component__WEBPACK_IMPORTED_MODULE_64__["InfoAdjuntosAdminComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestoreModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuthModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorageModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                ng_flash_messages__WEBPACK_IMPORTED_MODULE_13__["NgFlashMessagesModule"].forRoot(),
            ],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"], _services_Cliente_service__WEBPACK_IMPORTED_MODULE_8__["ClienteService"], _services_proyecto_service__WEBPACK_IMPORTED_MODULE_9__["ProyectoService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/admin/admin.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/admin/admin.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/admin/admin.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/admin/admin.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nabvar-admin>\r\n\r\n</app-nabvar-admin>\r\n\r\n<div class=\"container main-container\">\r\n    <ng-flash-message></ng-flash-message>\r\n    <router-outlet></router-outlet>\r\n\r\n</div>\r\n\r\n<br>\r\n<div class=\"cotainer\">\r\n    <h3 style=\"text-align: center\">Zona de Administrador</h3>\r\n    <hr>\r\n\r\n    <P style=\"text-align: center\">Ha igresado como Administrador de la App Web PMO</P>\r\n    <br><br><br><br><br><br><br><br><br><br>\r\n    <hr>\r\n    <div class=\"text-center\" id=\"contenedor\">\r\n        <img src=\"/assets/img/LogoIS.ico\" class=\"rounded \" alt=\"... \" class=\"rounded-circle\">\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/admin/admin.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/admin/admin.component.ts ***!
  \*****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/components/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/components/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/buscador-admin/buscador-admin.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/admin/buscador-admin/buscador-admin.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/admin/buscador-admin/buscador-admin.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/admin/buscador-admin/buscador-admin.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nabvar-admin>\n\n</app-nabvar-admin>\n<div class=\"container main-container \">\n\n    <router-outlet></router-outlet>\n\n</div>\n\n<div class=\"container \">\n    <br>\n    <h3 style=\"text-align: center \">Proyectos Encontrados</h3>\n    <table class=\"table \">\n        <thead class=\"list-group-item-danger \">\n            <tr class=\"light bg-light\">\n                <th scope=\"col \">Código</th>\n                <th scope=\"col \">Nombre</th>\n                <td></td>\n                <th scope=\"col \">Acciones</th>\n            </tr>\n        </thead>\n\n        <tbody>\n            <tr>\n                <th scope=\"row \">{{proyecto.codigo}}</th>\n                <td>{{proyecto.nombre}}</td>\n                <td> <button [routerLink]=\"['/VisualizarProyectoAdmin', proyecto.codigo]\" class=\"myButton\">\n                        <span class=\"glyphicon glyphicon-eye-open\"></span> Visualizar\n                        </button></td>\n                <td><button [routerLink]=\"['/modificarProyecto', proyecto.codigo]\" class=\"myButton\">\n                        <span class=\"glyphicon glyphicon-edit\"></span> Modificar\n                        </button></td>\n            </tr>\n        </tbody>\n    </table>"

/***/ }),

/***/ "./src/app/components/admin/buscador-admin/buscador-admin.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/admin/buscador-admin/buscador-admin.component.ts ***!
  \*****************************************************************************/
/*! exports provided: BuscadorAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscadorAdminComponent", function() { return BuscadorAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_proyecto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/proyecto.service */ "./src/app/services/proyecto.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BuscadorAdminComponent = /** @class */ (function () {
    function BuscadorAdminComponent(activateRoute, proyectoService) {
        this.activateRoute = activateRoute;
        this.proyectoService = proyectoService;
        this.proyecto = {
            codigo: '',
            nombre: '',
            descripcion: '',
            cliente: '',
        };
    }
    BuscadorAdminComponent.prototype.ngOnInit = function () {
        this.getBusquedaproyecto();
    };
    // PENDIENTE OPTIMIZAR BÚSQUEDA
    BuscadorAdminComponent.prototype.getBusquedaproyecto = function () {
        var _this = this;
        this.activateRoute.params.subscribe(function (params) {
            _this.proy = _this.proyectoService.buscarOneproyectos(params['termino']);
        });
        var collection = this.proy;
        collection.subscribe(function (docs) {
            _this.proyecto = docs[0];
        });
    };
    BuscadorAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buscador-admin',
            template: __webpack_require__(/*! ./buscador-admin.component.html */ "./src/app/components/admin/buscador-admin/buscador-admin.component.html"),
            styles: [__webpack_require__(/*! ./buscador-admin.component.css */ "./src/app/components/admin/buscador-admin/buscador-admin.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services_proyecto_service__WEBPACK_IMPORTED_MODULE_2__["ProyectoService"]])
    ], BuscadorAdminComponent);
    return BuscadorAdminComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/control-acceso-admin/control-acceso-admin.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/components/admin/control-acceso-admin/control-acceso-admin.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/admin/control-acceso-admin/control-acceso-admin.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/admin/control-acceso-admin/control-acceso-admin.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nabvar-admin>\n\n</app-nabvar-admin>\n\n<div class=\"container main-container\">\n    <ng-flash-message></ng-flash-message>\n    <router-outlet></router-outlet>\n\n</div>\n\n<br>\n<div class=\"cotainer\">\n    <h3 style=\"text-align: center\">Zona de Administrador</h3>\n    <hr>\n\n    <P style=\"text-align: center\">Ha igresado como Administrador de la App Web PMO</P>\n    <br><br><br><br><br><br><br><br><br><br>\n    <hr>\n    <div class=\"text-center\" id=\"contenedor\">\n        <img src=\"/assets/img/LogoIS.ico\" class=\"rounded \" alt=\"... \" class=\"rounded-circle\">\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/admin/control-acceso-admin/control-acceso-admin.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/admin/control-acceso-admin/control-acceso-admin.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ControlAccesoAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlAccesoAdminComponent", function() { return ControlAccesoAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ControlAccesoAdminComponent = /** @class */ (function () {
    function ControlAccesoAdminComponent() {
    }
    ControlAccesoAdminComponent.prototype.ngOnInit = function () {
    };
    ControlAccesoAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-control-acceso-admin',
            template: __webpack_require__(/*! ./control-acceso-admin.component.html */ "./src/app/components/admin/control-acceso-admin/control-acceso-admin.component.html"),
            styles: [__webpack_require__(/*! ./control-acceso-admin.component.css */ "./src/app/components/admin/control-acceso-admin/control-acceso-admin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ControlAccesoAdminComponent);
    return ControlAccesoAdminComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/gestion-clientes-admin/gestion-clientes-admin.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/admin/gestion-clientes-admin/gestion-clientes-admin.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/admin/gestion-clientes-admin/gestion-clientes-admin.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/admin/gestion-clientes-admin/gestion-clientes-admin.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nabvar-admin>\n\n</app-nabvar-admin>\n\n<div class=\"container main-container\">\n    <ng-flash-message></ng-flash-message>\n    <router-outlet></router-outlet>\n\n</div>\n\n<br>\n<div class=\"cotainer\">\n    <h3 style=\"text-align: center\">Zona de Administrador</h3>\n    <hr>\n\n    <P style=\"text-align: center\">Ha igresado como Administrador de la App Web PMO</P>\n    <br><br><br><br><br><br><br><br><br><br>\n    <hr>\n    <div class=\"text-center\" id=\"contenedor\">\n        <img src=\"/assets/img/LogoIS.ico\" class=\"rounded \" alt=\"... \" class=\"rounded-circle\">\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/admin/gestion-clientes-admin/gestion-clientes-admin.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/admin/gestion-clientes-admin/gestion-clientes-admin.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: GestionClientesAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestionClientesAdminComponent", function() { return GestionClientesAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GestionClientesAdminComponent = /** @class */ (function () {
    function GestionClientesAdminComponent() {
    }
    GestionClientesAdminComponent.prototype.ngOnInit = function () {
    };
    GestionClientesAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gestion-clientes-admin',
            template: __webpack_require__(/*! ./gestion-clientes-admin.component.html */ "./src/app/components/admin/gestion-clientes-admin/gestion-clientes-admin.component.html"),
            styles: [__webpack_require__(/*! ./gestion-clientes-admin.component.css */ "./src/app/components/admin/gestion-clientes-admin/gestion-clientes-admin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GestionClientesAdminComponent);
    return GestionClientesAdminComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/home-admin/home-admin.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/admin/home-admin/home-admin.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/admin/home-admin/home-admin.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/admin/home-admin/home-admin.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nabvar-admin>\n\n</app-nabvar-admin>\n\n<div class=\"container main-container\">\n    <ng-flash-message></ng-flash-message>\n    <router-outlet></router-outlet>\n\n</div>\n<br>\n<div class=\"cotainer\">\n    <h3 style=\"text-align: center\">Zona de Administrador</h3>\n    <hr>\n\n    <P style=\"text-align: center\">Ha igresado como Administrador de la App Web PMO</P>\n    <br><br><br><br><br><br><br><br><br><br>\n    <hr>\n    <div class=\"text-center\" id=\"contenedor\">\n        <img src=\"/assets/img/LogoIS.ico\" class=\"rounded \" alt=\"... \" class=\"rounded-circle\">\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/admin/home-admin/home-admin.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/admin/home-admin/home-admin.component.ts ***!
  \*********************************************************************/
/*! exports provided: HomeAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeAdminComponent", function() { return HomeAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeAdminComponent = /** @class */ (function () {
    function HomeAdminComponent() {
    }
    HomeAdminComponent.prototype.ngOnInit = function () {
    };
    HomeAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-admin',
            template: __webpack_require__(/*! ./home-admin.component.html */ "./src/app/components/admin/home-admin/home-admin.component.html"),
            styles: [__webpack_require__(/*! ./home-admin.component.css */ "./src/app/components/admin/home-admin/home-admin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeAdminComponent);
    return HomeAdminComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/perfil-admin/perfil-admin.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/admin/perfil-admin/perfil-admin.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/admin/perfil-admin/perfil-admin.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/admin/perfil-admin/perfil-admin.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nabvar-admin>\n\n</app-nabvar-admin>\n<br>\n<br>\n<div class=\"card bg-light mb-3 mx-auto\" style=\"max-width: 50rem; \">\n    <div class=\"container\">\n        <form class=\"px-4 py-3\">\n            <form role=\"form\" id=\"register-form\" autocomplete=\"off\">\n                <div class=\"form-header\">\n                    <h3 style=\"text-align: center\" class=\"form-title\"><i class=\"fa fa-user\"></i> Nombres Y Apellido del Usuario</h3>\n                    <hr>\n                    <br>\n                </div>\n\n                <form>\n                    <div class=\"form-group row\">\n                        <label for=\"email\" class=\"col-3 col-form-label\">Email</label>\n                        <div>\n                            <input type=\"text\" size=\"50\" class=\"form-control\" id=\"email\" name=\"email\" [(ngModel)]=\"userEmail\">\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label for=\"perfil\" class=\"col-3 col-form-label\">Perfil</label>\n                        <div>\n                            <input type=\"text\" size=\"50\" class=\"form-control\" id=\"rol\" name=\"rol\">\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label for=\"perfil\" class=\"col-3 col-form-label\">Estado</label>\n                        <div>\n                            <input type=\"text\" size=\"50\" class=\"form-control\" id=\"estado\" name=\"estado\">\n                        </div>\n                    </div>\n\n                </form>\n            </form>\n        </form>\n    </div>\n</div>\n<form>"

/***/ }),

/***/ "./src/app/components/admin/perfil-admin/perfil-admin.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/admin/perfil-admin/perfil-admin.component.ts ***!
  \*************************************************************************/
/*! exports provided: PerfilAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilAdminComponent", function() { return PerfilAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PerfilAdminComponent = /** @class */ (function () {
    function PerfilAdminComponent(auth) {
        this.auth = auth;
    }
    PerfilAdminComponent.prototype.ngOnInit = function () {
        this.onComprobarUserLogin();
    };
    PerfilAdminComponent.prototype.onComprobarUserLogin = function () {
        var _this = this;
        this.auth.getAuth().subscribe(function (auth) {
            if (auth) {
                _this.isLogin = true;
                _this.userNombre = auth.displayName,
                    _this.userEmail = auth.email;
            }
            else {
                _this.isLogin = false;
            }
        });
    };
    PerfilAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-perfil-admin',
            template: __webpack_require__(/*! ./perfil-admin.component.html */ "./src/app/components/admin/perfil-admin/perfil-admin.component.html"),
            styles: [__webpack_require__(/*! ./perfil-admin.component.css */ "./src/app/components/admin/perfil-admin/perfil-admin.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], PerfilAdminComponent);
    return PerfilAdminComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/proyectos-admin/listarproyectos-admin/listarproyectos-admin.component.css":
/*!************************************************************************************************************!*\
  !*** ./src/app/components/admin/proyectos-admin/listarproyectos-admin/listarproyectos-admin.component.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/admin/proyectos-admin/listarproyectos-admin/listarproyectos-admin.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/components/admin/proyectos-admin/listarproyectos-admin/listarproyectos-admin.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nabvar-admin>\n\n</app-nabvar-admin>\n<br>\n<app-nav-proyectos></app-nav-proyectos>\n\n<app-listar-proyecto>\n\n</app-listar-proyecto>"

/***/ }),

/***/ "./src/app/components/admin/proyectos-admin/listarproyectos-admin/listarproyectos-admin.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/admin/proyectos-admin/listarproyectos-admin/listarproyectos-admin.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ListarproyectosAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListarproyectosAdminComponent", function() { return ListarproyectosAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListarproyectosAdminComponent = /** @class */ (function () {
    function ListarproyectosAdminComponent() {
    }
    ListarproyectosAdminComponent.prototype.ngOnInit = function () {
    };
    ListarproyectosAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listarproyectos-admin',
            template: __webpack_require__(/*! ./listarproyectos-admin.component.html */ "./src/app/components/admin/proyectos-admin/listarproyectos-admin/listarproyectos-admin.component.html"),
            styles: [__webpack_require__(/*! ./listarproyectos-admin.component.css */ "./src/app/components/admin/proyectos-admin/listarproyectos-admin/listarproyectos-admin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ListarproyectosAdminComponent);
    return ListarproyectosAdminComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/proyectos-admin/listarproyectos-admin/visualizar-proyectos-admin/info-adjuntos-admin/info-adjuntos-admin.component.css":
/*!*********************************************************************************************************************************************************!*\
  !*** ./src/app/components/admin/proyectos-admin/listarproyectos-admin/visualizar-proyectos-admin/info-adjuntos-admin/info-adjuntos-admin.component.css ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/admin/proyectos-admin/listarproyectos-admin/visualizar-proyectos-admin/info-adjuntos-admin/info-adjuntos-admin.component.html":
/*!**********************************************************************************************************************************************************!*\
  !*** ./src/app/components/admin/proyectos-admin/listarproyectos-admin/visualizar-proyectos-admin/info-adjuntos-admin/info-adjuntos-admin.component.html ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nabvar-admin>\n\n</app-nabvar-admin>\n<br>\n<div>\n    <button type=\"button\" class=\"myButton\" onclick=\"history.back()\"><span class=\"glyphicon glyphicon-circle-arrow-left\"></span>Atras</button>\n</div>\n\n\n<app-info-adjuntos></app-info-adjuntos>"

/***/ }),

/***/ "./src/app/components/admin/proyectos-admin/listarproyectos-admin/visualizar-proyectos-admin/info-adjuntos-admin/info-adjuntos-admin.component.ts":
/*!********************************************************************************************************************************************************!*\
  !*** ./src/app/components/admin/proyectos-admin/listarproyectos-admin/visualizar-proyectos-admin/info-adjuntos-admin/info-adjuntos-admin.component.ts ***!
  \********************************************************************************************************************************************************/
/*! exports provided: InfoAdjuntosAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoAdjuntosAdminComponent", function() { return InfoAdjuntosAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InfoAdjuntosAdminComponent = /** @class */ (function () {
    function InfoAdjuntosAdminComponent() {
    }
    InfoAdjuntosAdminComponent.prototype.ngOnInit = function () {
    };
    InfoAdjuntosAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-info-adjuntos-admin',
            template: __webpack_require__(/*! ./info-adjuntos-admin.component.html */ "./src/app/components/admin/proyectos-admin/listarproyectos-admin/visualizar-proyectos-admin/info-adjuntos-admin/info-adjuntos-admin.component.html"),
            styles: [__webpack_require__(/*! ./info-adjuntos-admin.component.css */ "./src/app/components/admin/proyectos-admin/listarproyectos-admin/visualizar-proyectos-admin/info-adjuntos-admin/info-adjuntos-admin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InfoAdjuntosAdminComponent);
    return InfoAdjuntosAdminComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/proyectos-admin/listarproyectos-admin/visualizar-proyectos-admin/info-cliente-admin/info-cliente-admin.component.css":
/*!*******************************************************************************************************************************************************!*\
  !*** ./src/app/components/admin/proyectos-admin/listarproyectos-admin/visualizar-proyectos-admin/info-cliente-admin/info-cliente-admin.component.css ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/admin/proyectos-admin/listarproyectos-admin/visualizar-proyectos-admin/info-cliente-admin/info-cliente-admin.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** ./src/app/components/admin/proyectos-admin/listarproyectos-admin/visualizar-proyectos-admin/info-cliente-admin/info-cliente-admin.component.html ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nabvar-admin>\n\n</app-nabvar-admin>\n<br>\n<div>\n    <button type=\"button\" class=\"myButton\" onclick=\"history.back()\"><span class=\"glyphicon glyphicon-circle-arrow-left\"></span>Atras</button>\n</div>\n\n<app-info-cliente>\n\n</app-info-cliente>"

/***/ }),

/***/ "./src/app/components/admin/proyectos-admin/listarproyectos-admin/visualizar-proyectos-admin/info-cliente-admin/info-cliente-admin.component.ts":
/*!******************************************************************************************************************************************************!*\
  !*** ./src/app/components/admin/proyectos-admin/listarproyectos-admin/visualizar-proyectos-admin/info-cliente-admin/info-cliente-admin.component.ts ***!
  \******************************************************************************************************************************************************/
/*! exports provided: InfoClienteAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoClienteAdminComponent", function() { return InfoClienteAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InfoClienteAdminComponent = /** @class */ (function () {
    function InfoClienteAdminComponent() {
    }
    InfoClienteAdminComponent.prototype.ngOnInit = function () {
    };
    InfoClienteAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-info-cliente-admin',
            template: __webpack_require__(/*! ./info-cliente-admin.component.html */ "./src/app/components/admin/proyectos-admin/listarproyectos-admin/visualizar-proyectos-admin/info-cliente-admin/info-cliente-admin.component.html"),
            styles: [__webpack_require__(/*! ./info-cliente-admin.component.css */ "./src/app/components/admin/proyectos-admin/listarproyectos-admin/visualizar-proyectos-admin/info-cliente-admin/info-cliente-admin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InfoClienteAdminComponent);
    return InfoClienteAdminComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/proyectos-admin/listarproyectos-admin/visualizar-proyectos-admin/nav-visualizar-proyecto-admin/nav-visualizar-proyecto-admin.component.css":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./src/app/components/admin/proyectos-admin/listarproyectos-admin/visualizar-proyectos-admin/nav-visualizar-proyecto-admin/nav-visualizar-proyecto-admin.component.css ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/admin/proyectos-admin/listarproyectos-admin/visualizar-proyectos-admin/nav-visualizar-proyecto-admin/nav-visualizar-proyecto-admin.component.html":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./src/app/components/admin/proyectos-admin/listarproyectos-admin/visualizar-proyectos-admin/nav-visualizar-proyecto-admin/nav-visualizar-proyecto-admin.component.html ***!
  \******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\">\n    <li class=\"nav-item\">\n        <a class=\"nav-link active\" [routerLink]=\"['/VisualizarProyectoAdmin', proyecto.codigo]\">INFORMACIÓN GENERAL</a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/infoClienteAdmin', proyecto.cliente]\">INFORMACIÓN CLIENTE</a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/info/Adjuntos/Admin/', proyecto.codigo]\">DOCUMENTOS ADJUNTOS</a>\n    </li>\n</ul>"

/***/ }),

/***/ "./src/app/components/admin/proyectos-admin/listarproyectos-admin/visualizar-proyectos-admin/nav-visualizar-proyecto-admin/nav-visualizar-proyecto-admin.component.ts":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./src/app/components/admin/proyectos-admin/listarproyectos-admin/visualizar-proyectos-admin/nav-visualizar-proyecto-admin/nav-visualizar-proyecto-admin.component.ts ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: NavVisualizarProyectoAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavVisualizarProyectoAdminComponent", function() { return NavVisualizarProyectoAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_proyecto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/proyecto.service */ "./src/app/services/proyecto.service.ts");
/* harmony import */ var src_app_services_Cliente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/Cliente.service */ "./src/app/services/Cliente.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavVisualizarProyectoAdminComponent = /** @class */ (function () {
    function NavVisualizarProyectoAdminComponent(router, route, proyectoService, clienteService) {
        this.router = router;
        this.route = route;
        this.proyectoService = proyectoService;
        this.clienteService = clienteService;
        this.proyecto = {
            codigo: '',
            nombre: '',
            descripcion: '',
            cliente: '',
            adjuntoUrl: [],
        };
    }
    NavVisualizarProyectoAdminComponent.prototype.ngOnInit = function () {
        this.getInfoProyecto();
    };
    NavVisualizarProyectoAdminComponent.prototype.getInfoProyecto = function () {
        var _this = this;
        this.codProyecto = this.route.snapshot.params['codigo'];
        var collection = this.proyectoService.getOneProyecto(this.codProyecto);
        collection.subscribe(function (docs) {
            _this.proyecto = docs[0];
        });
    };
    NavVisualizarProyectoAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-visualizar-proyecto-admin',
            template: __webpack_require__(/*! ./nav-visualizar-proyecto-admin.component.html */ "./src/app/components/admin/proyectos-admin/listarproyectos-admin/visualizar-proyectos-admin/nav-visualizar-proyecto-admin/nav-visualizar-proyecto-admin.component.html"),
            styles: [__webpack_require__(/*! ./nav-visualizar-proyecto-admin.component.css */ "./src/app/components/admin/proyectos-admin/listarproyectos-admin/visualizar-proyectos-admin/nav-visualizar-proyecto-admin/nav-visualizar-proyecto-admin.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services_proyecto_service__WEBPACK_IMPORTED_MODULE_2__["ProyectoService"],
            src_app_services_Cliente_service__WEBPACK_IMPORTED_MODULE_3__["ClienteService"]])
    ], NavVisualizarProyectoAdminComponent);
    return NavVisualizarProyectoAdminComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/proyectos-admin/listarproyectos-admin/visualizar-proyectos-admin/visualizar-proyectos-admin.component.css":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/components/admin/proyectos-admin/listarproyectos-admin/visualizar-proyectos-admin/visualizar-proyectos-admin.component.css ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/admin/proyectos-admin/listarproyectos-admin/visualizar-proyectos-admin/visualizar-proyectos-admin.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/components/admin/proyectos-admin/listarproyectos-admin/visualizar-proyectos-admin/visualizar-proyectos-admin.component.html ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nabvar-admin>\n\n</app-nabvar-admin>\n<br>\n\n<app-nav-visualizar-proyecto-admin>\n\n</app-nav-visualizar-proyecto-admin>\n\n<app-visualizar-proyecto>\n\n</app-visualizar-proyecto>"

/***/ }),

/***/ "./src/app/components/admin/proyectos-admin/listarproyectos-admin/visualizar-proyectos-admin/visualizar-proyectos-admin.component.ts":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/components/admin/proyectos-admin/listarproyectos-admin/visualizar-proyectos-admin/visualizar-proyectos-admin.component.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: VisualizarProyectosAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizarProyectosAdminComponent", function() { return VisualizarProyectosAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VisualizarProyectosAdminComponent = /** @class */ (function () {
    function VisualizarProyectosAdminComponent() {
    }
    VisualizarProyectosAdminComponent.prototype.ngOnInit = function () {
    };
    VisualizarProyectosAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-visualizar-proyectos-admin',
            template: __webpack_require__(/*! ./visualizar-proyectos-admin.component.html */ "./src/app/components/admin/proyectos-admin/listarproyectos-admin/visualizar-proyectos-admin/visualizar-proyectos-admin.component.html"),
            styles: [__webpack_require__(/*! ./visualizar-proyectos-admin.component.css */ "./src/app/components/admin/proyectos-admin/listarproyectos-admin/visualizar-proyectos-admin/visualizar-proyectos-admin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VisualizarProyectosAdminComponent);
    return VisualizarProyectosAdminComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/proyectos-admin/proyectos-admin.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/admin/proyectos-admin/proyectos-admin.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/admin/proyectos-admin/proyectos-admin.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/admin/proyectos-admin/proyectos-admin.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nabvar-admin>\n\n</app-nabvar-admin>\n\n<div class=\"container main-container\">\n    <ng-flash-message></ng-flash-message>\n    <router-outlet></router-outlet>\n\n</div>\n\n<br>\n<div class=\"cotainer\">\n    <h3 style=\"text-align: center\">Zona de Administrador</h3>\n    <hr>\n\n    <P style=\"text-align: center\">Ha igresado como Administrador de la App Web PMO</P>\n    <br><br><br><br><br><br><br><br><br><br>\n    <hr>\n    <div class=\"text-center\" id=\"contenedor\">\n        <img src=\"/assets/img/LogoIS.ico\" class=\"rounded \" alt=\"... \" class=\"rounded-circle\">\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/admin/proyectos-admin/proyectos-admin.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/admin/proyectos-admin/proyectos-admin.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProyectosAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProyectosAdminComponent", function() { return ProyectosAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProyectosAdminComponent = /** @class */ (function () {
    function ProyectosAdminComponent() {
    }
    ProyectosAdminComponent.prototype.ngOnInit = function () {
    };
    ProyectosAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-proyectos-admin',
            template: __webpack_require__(/*! ./proyectos-admin.component.html */ "./src/app/components/admin/proyectos-admin/proyectos-admin.component.html"),
            styles: [__webpack_require__(/*! ./proyectos-admin.component.css */ "./src/app/components/admin/proyectos-admin/proyectos-admin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProyectosAdminComponent);
    return ProyectosAdminComponent;
}());



/***/ }),

/***/ "./src/app/components/buscador/buscador.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/buscador/buscador.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/buscador/buscador.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/buscador/buscador.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container main-container \">\n\n    <router-outlet></router-outlet>\n\n</div>\n\n<div class=\"container \">\n    <br>\n    <h3 style=\"text-align: center \">Proyectos Encontrados</h3>\n    <table class=\"table \">\n        <thead class=\"list-group-item-danger \">\n            <tr class=\"light bg-light\">\n                <th scope=\"col \">Código</th>\n                <th scope=\"col \">Nombre</th>\n                <td></td>\n                <th scope=\"col \">Acciones</th>\n            </tr>\n        </thead>\n\n        <tbody>\n            <tr>\n                <th scope=\"row \">{{proyecto.codigo}}</th>\n                <td>{{proyecto.nombre}}</td>\n                <td> <button [routerLink]=\"['/VisualizarProyecto', proyecto.codigo]\" class=\"myButton\">\n                        <span class=\"glyphicon glyphicon-eye-open\"></span> Visualizar\n                        </button></td>\n                <td><button [routerLink]=\"['/modificarProyecto', proyecto.codigo]\" class=\"myButton\">\n                        <span class=\"glyphicon glyphicon-edit\"></span> Modificar\n                        </button></td>\n            </tr>\n        </tbody>\n    </table>"

/***/ }),

/***/ "./src/app/components/buscador/buscador.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/buscador/buscador.component.ts ***!
  \***********************************************************/
/*! exports provided: BuscadorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscadorComponent", function() { return BuscadorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_proyecto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/proyecto.service */ "./src/app/services/proyecto.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BuscadorComponent = /** @class */ (function () {
    function BuscadorComponent(activateRoute, proyectoService, ngFlashMensaje, router) {
        this.activateRoute = activateRoute;
        this.proyectoService = proyectoService;
        this.ngFlashMensaje = ngFlashMensaje;
        this.router = router;
        this.filterValue = 'termino';
        this.proyecto = {
            codigo: '',
            nombre: '',
            descripcion: '',
            cliente: '',
        };
    }
    BuscadorComponent.prototype.ngOnInit = function () {
        this.getBusquedaproyecto();
    };
    BuscadorComponent.prototype.getBusquedaproyecto = function () {
        var _this = this;
        this.activateRoute.params.subscribe(function (params) {
            _this.proy = _this.proyectoService.buscarOneproyectos(params['termino']);
        });
        var collection = this.proy;
        collection.subscribe(function (docs) {
            _this.proyecto = docs[0];
        });
    };
    BuscadorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buscador',
            template: __webpack_require__(/*! ./buscador.component.html */ "./src/app/components/buscador/buscador.component.html"),
            styles: [__webpack_require__(/*! ./buscador.component.css */ "./src/app/components/buscador/buscador.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_proyecto_service__WEBPACK_IMPORTED_MODULE_2__["ProyectoService"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], BuscadorComponent);
    return BuscadorComponent;
}());



/***/ }),

/***/ "./src/app/components/consult/buscador-consult/buscador-consult.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/consult/buscador-consult/buscador-consult.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/consult/buscador-consult/buscador-consult.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/consult/buscador-consult/buscador-consult.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nabvar-consult>\n\n</app-nabvar-consult>\n\n<div class=\"container main-container \">\n\n    <router-outlet></router-outlet>\n\n</div>\n\n<div class=\"container \">\n    <br>\n    <h3 style=\"text-align: center \">Proyectos Encontrados</h3>\n    <table class=\"table \">\n        <thead class=\"list-group-item-danger \">\n            <tr class=\"light bg-light\">\n                <th scope=\"col \">Código</th>\n                <th scope=\"col \">Nombre</th>\n                <td></td>\n                <th scope=\"col \">Acciones</th>\n            </tr>\n        </thead>\n\n        <tbody>\n            <tr>\n                <th scope=\"row \">{{proyecto.codigo}}</th>\n                <td>{{proyecto.nombre}}</td>\n                <td></td>\n                <td> <button [routerLink]=\"['/VisualizarProyectoConsult', proyecto.codigo]\" class=\"myButton\">\n                        <span class=\"glyphicon glyphicon-eye-open\"></span> Visualizar\n                    </button></td>\n            </tr>\n        </tbody>\n    </table>"

/***/ }),

/***/ "./src/app/components/consult/buscador-consult/buscador-consult.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/consult/buscador-consult/buscador-consult.component.ts ***!
  \***********************************************************************************/
/*! exports provided: BuscadorConsultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscadorConsultComponent", function() { return BuscadorConsultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_proyecto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/proyecto.service */ "./src/app/services/proyecto.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BuscadorConsultComponent = /** @class */ (function () {
    function BuscadorConsultComponent(activateRoute, proyectoService) {
        this.activateRoute = activateRoute;
        this.proyectoService = proyectoService;
        this.proyecto = {
            codigo: '',
            nombre: '',
            descripcion: '',
            cliente: '',
        };
    }
    BuscadorConsultComponent.prototype.ngOnInit = function () {
        this.getBusquedaproyecto();
    };
    // PENDIENTE OPTIMIZAR BÚSQUEDA
    BuscadorConsultComponent.prototype.getBusquedaproyecto = function () {
        var _this = this;
        this.activateRoute.params.subscribe(function (params) {
            _this.proy = _this.proyectoService.buscarOneproyectos(params['termino']);
        });
        var collection = this.proy;
        collection.subscribe(function (docs) {
            _this.proyecto = docs[0];
        });
    };
    BuscadorConsultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buscador-consult',
            template: __webpack_require__(/*! ./buscador-consult.component.html */ "./src/app/components/consult/buscador-consult/buscador-consult.component.html"),
            styles: [__webpack_require__(/*! ./buscador-consult.component.css */ "./src/app/components/consult/buscador-consult/buscador-consult.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services_proyecto_service__WEBPACK_IMPORTED_MODULE_2__["ProyectoService"]])
    ], BuscadorConsultComponent);
    return BuscadorConsultComponent;
}());



/***/ }),

/***/ "./src/app/components/consult/consult.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/consult/consult.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/consult/consult.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/consult/consult.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nabvar-consult></app-nabvar-consult>\n\n\n<div class=\"container main-container\">\n    <ng-flash-message></ng-flash-message>\n    <router-outlet></router-outlet>\n\n</div>\n\n<br>\n<div class=\"cotainer\">\n    <h3 style=\"text-align: center\">Zona de Consulta de Proyectos</h3>\n    <hr>\n\n    <P style=\"text-align: center\">Ha igresado como Usuario de Consulta de la App Web PMO</P>\n    <br><br><br><br><br><br><br><br><br><br>\n    <hr>\n    <div class=\"text-center\" id=\"contenedor\">\n        <img src=\"/assets/img/LogoIS.ico\" class=\"rounded \" alt=\"... \" class=\"rounded-circle\">\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/consult/consult.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/consult/consult.component.ts ***!
  \*********************************************************/
/*! exports provided: ConsultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultComponent", function() { return ConsultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConsultComponent = /** @class */ (function () {
    function ConsultComponent() {
    }
    ConsultComponent.prototype.ngOnInit = function () {
    };
    ConsultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consult',
            template: __webpack_require__(/*! ./consult.component.html */ "./src/app/components/consult/consult.component.html"),
            styles: [__webpack_require__(/*! ./consult.component.css */ "./src/app/components/consult/consult.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ConsultComponent);
    return ConsultComponent;
}());



/***/ }),

/***/ "./src/app/components/consult/home-consult/home-consult.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/consult/home-consult/home-consult.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/consult/home-consult/home-consult.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/consult/home-consult/home-consult.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nabvar-consult>\n\n</app-nabvar-consult>\n\n<br>\n<div class=\"cotainer\">\n    <h3 style=\"text-align: center\">Zona de Consulta de Proyectos</h3>\n    <hr>\n\n    <P style=\"text-align: center\">Ha igresado como Usuario de Consulta de la App Web PMO</P>\n    <br><br><br><br><br><br><br><br><br><br>\n    <hr>\n    <div class=\"text-center\" id=\"contenedor\">\n        <img src=\"/assets/img/LogoIS.ico\" class=\"rounded \" alt=\"... \" class=\"rounded-circle\">\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/consult/home-consult/home-consult.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/consult/home-consult/home-consult.component.ts ***!
  \***************************************************************************/
/*! exports provided: HomeConsultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeConsultComponent", function() { return HomeConsultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeConsultComponent = /** @class */ (function () {
    function HomeConsultComponent() {
    }
    HomeConsultComponent.prototype.ngOnInit = function () {
    };
    HomeConsultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-consult',
            template: __webpack_require__(/*! ./home-consult.component.html */ "./src/app/components/consult/home-consult/home-consult.component.html"),
            styles: [__webpack_require__(/*! ./home-consult.component.css */ "./src/app/components/consult/home-consult/home-consult.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeConsultComponent);
    return HomeConsultComponent;
}());



/***/ }),

/***/ "./src/app/components/consult/perfil-consult/perfil-consult.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/consult/perfil-consult/perfil-consult.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/consult/perfil-consult/perfil-consult.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/consult/perfil-consult/perfil-consult.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nabvar-consult>\n\n</app-nabvar-consult>\n<br>\n<br>\n<div class=\"card bg-light mb-3 mx-auto\" style=\"max-width: 50rem; \">\n    <div class=\"container\">\n        <form class=\"px-4 py-3\">\n            <form role=\"form\" id=\"register-form\" autocomplete=\"off\">\n                <div class=\"form-header\">\n                    <h3 style=\"text-align: center\" class=\"form-title\"><i class=\"fa fa-user\"></i> Nombres Y Apellido del Usuario</h3>\n                    <hr>\n                    <br>\n                </div>\n\n                <form>\n                    <div class=\"form-group row\">\n                        <label for=\"email\" class=\"col-3 col-form-label\">Email</label>\n                        <div>\n                            <input type=\"text\" size=\"50\" class=\"form-control\" id=\"email\" name=\"email\">\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label for=\"perfil\" class=\"col-3 col-form-label\">Perfil</label>\n                        <div>\n                            <input type=\"text\" size=\"50\" class=\"form-control\" id=\"rol\" name=\"rol\">\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label for=\"perfil\" class=\"col-3 col-form-label\">Estado</label>\n                        <div>\n                            <input type=\"text\" size=\"50\" class=\"form-control\" id=\"estado\" name=\"estado\">\n                        </div>\n                    </div>\n\n                </form>\n            </form>\n        </form>\n    </div>\n</div>\n<form>"

/***/ }),

/***/ "./src/app/components/consult/perfil-consult/perfil-consult.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/consult/perfil-consult/perfil-consult.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PerfilConsultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilConsultComponent", function() { return PerfilConsultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PerfilConsultComponent = /** @class */ (function () {
    function PerfilConsultComponent() {
    }
    PerfilConsultComponent.prototype.ngOnInit = function () {
    };
    PerfilConsultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-perfil-consult',
            template: __webpack_require__(/*! ./perfil-consult.component.html */ "./src/app/components/consult/perfil-consult/perfil-consult.component.html"),
            styles: [__webpack_require__(/*! ./perfil-consult.component.css */ "./src/app/components/consult/perfil-consult/perfil-consult.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PerfilConsultComponent);
    return PerfilConsultComponent;
}());



/***/ }),

/***/ "./src/app/components/consult/proyectos-consult/listarproyectos-consult/listarproyectos-consult.component.css":
/*!********************************************************************************************************************!*\
  !*** ./src/app/components/consult/proyectos-consult/listarproyectos-consult/listarproyectos-consult.component.css ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/consult/proyectos-consult/listarproyectos-consult/listarproyectos-consult.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/components/consult/proyectos-consult/listarproyectos-consult/listarproyectos-consult.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nabvar-consult>\n\n</app-nabvar-consult>\n\n<div class=\"container main-container \">\n\n    <router-outlet></router-outlet>\n\n</div>\n\n<div class=\"container \">\n    <br>\n    <h3 style=\"text-align: center \">Listado de Proyectos</h3>\n    <table class=\"table\">\n        <thead class=\"list-group-item-danger \">\n            <tr class=\"light bg-light\">\n                <th scope=\"col \">Código</th>\n                <th scope=\"col \">Nombre</th>\n                <td></td>\n                <th scope=\"col \">Acciones</th>\n            </tr>\n        </thead>\n\n        <tbody *ngFor=\"let proyecto of proyectos\">\n            <tr>\n                <th scope=\"row \">{{proyecto.codigo}}</th>\n                <td>{{proyecto.nombre}}</td>\n                <td></td>\n                <td> <button [routerLink]=\"['/VisualizarProyectoConsult', proyecto.codigo]\" class=\"myButton\">\n                            <span class=\"glyphicon glyphicon-eye-open\"></span> Visualizar\n                        </button></td>\n            </tr>\n            <tr *ngIf=\"proyectos?.length === 0\">\n                <td>No se encontraron Coincidencias</td>\n\n            </tr>\n        </tbody>\n    </table>\n</div>"

/***/ }),

/***/ "./src/app/components/consult/proyectos-consult/listarproyectos-consult/listarproyectos-consult.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/components/consult/proyectos-consult/listarproyectos-consult/listarproyectos-consult.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: ListarproyectosConsultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListarproyectosConsultComponent", function() { return ListarproyectosConsultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_proyecto_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/proyecto.service */ "./src/app/services/proyecto.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListarproyectosConsultComponent = /** @class */ (function () {
    function ListarproyectosConsultComponent(proycetoService, router) {
        this.proycetoService = proycetoService;
        this.router = router;
    }
    ListarproyectosConsultComponent.prototype.ngOnInit = function () {
        this.todosProyectos();
    };
    ListarproyectosConsultComponent.prototype.todosProyectos = function () {
        var _this = this;
        this.proycetoService.getAllProyectos().subscribe(function (proyectos) { return _this.proyectos = proyectos; });
    };
    ListarproyectosConsultComponent.prototype.applyFilter = function ($event) {
        var termino = $event.target.value;
        termino = termino.toLowerCase();
        this.proyectos.filter = termino;
    };
    ListarproyectosConsultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listarproyectos-consult',
            template: __webpack_require__(/*! ./listarproyectos-consult.component.html */ "./src/app/components/consult/proyectos-consult/listarproyectos-consult/listarproyectos-consult.component.html"),
            styles: [__webpack_require__(/*! ./listarproyectos-consult.component.css */ "./src/app/components/consult/proyectos-consult/listarproyectos-consult/listarproyectos-consult.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_proyecto_service__WEBPACK_IMPORTED_MODULE_1__["ProyectoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ListarproyectosConsultComponent);
    return ListarproyectosConsultComponent;
}());



/***/ }),

/***/ "./src/app/components/consult/proyectos-consult/listarproyectos-consult/visualizar-proyectos-consult/info-adjuntos-consult/info-adjuntos-consult.component.css":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./src/app/components/consult/proyectos-consult/listarproyectos-consult/visualizar-proyectos-consult/info-adjuntos-consult/info-adjuntos-consult.component.css ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/consult/proyectos-consult/listarproyectos-consult/visualizar-proyectos-consult/info-adjuntos-consult/info-adjuntos-consult.component.html":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./src/app/components/consult/proyectos-consult/listarproyectos-consult/visualizar-proyectos-consult/info-adjuntos-consult/info-adjuntos-consult.component.html ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nabvar-consult>\n\n</app-nabvar-consult>\n<br>\n<div>\n    <button type=\"button\" class=\"myButton\" onclick=\"history.back()\"><span class=\"glyphicon glyphicon-circle-arrow-left\"></span>Atras</button>\n</div>\n<div class=\"container main-container \">\n\n    <router-outlet></router-outlet>\n\n</div>\n\n<div class=\"container \">\n    <br>\n    <h3 style=\"text-align: center \">Listado de Documentos Adjuntos</h3>\n    <table class=\"table \">\n        <thead class=\"list-group-item-danger \">\n            <tr class=\"light bg-light\">\n                <th scope=\"col \">URL</th>\n            </tr>\n        </thead>\n\n        <tbody *ngFor=\"let item of proyecto.adjuntoUrl\">\n            <tr>\n                <th><a href={{item.url}} class=\"card-link\">{{item.nombre}}</a></th>\n            </tr>\n        </tbody>\n    </table>\n</div>"

/***/ }),

/***/ "./src/app/components/consult/proyectos-consult/listarproyectos-consult/visualizar-proyectos-consult/info-adjuntos-consult/info-adjuntos-consult.component.ts":
/*!********************************************************************************************************************************************************************!*\
  !*** ./src/app/components/consult/proyectos-consult/listarproyectos-consult/visualizar-proyectos-consult/info-adjuntos-consult/info-adjuntos-consult.component.ts ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: InfoAdjuntosConsultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoAdjuntosConsultComponent", function() { return InfoAdjuntosConsultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_proyecto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/proyecto.service */ "./src/app/services/proyecto.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InfoAdjuntosConsultComponent = /** @class */ (function () {
    function InfoAdjuntosConsultComponent(router, route, proyectoService) {
        this.router = router;
        this.route = route;
        this.proyectoService = proyectoService;
        this.proyecto = {
            codigo: '',
            nombre: '',
            descripcion: '',
            cliente: '',
            adjuntoUrl: [],
        };
    }
    InfoAdjuntosConsultComponent.prototype.ngOnInit = function () {
        this.getInfoProyecto();
    };
    InfoAdjuntosConsultComponent.prototype.getInfoProyecto = function () {
        var _this = this;
        this.codProyecto = this.route.snapshot.params['codigo'];
        var collection = this.proyectoService.getOneProyecto(this.codProyecto);
        collection.subscribe(function (docs) {
            _this.proyecto = docs[0];
        });
    };
    InfoAdjuntosConsultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-info-adjuntos-consult',
            template: __webpack_require__(/*! ./info-adjuntos-consult.component.html */ "./src/app/components/consult/proyectos-consult/listarproyectos-consult/visualizar-proyectos-consult/info-adjuntos-consult/info-adjuntos-consult.component.html"),
            styles: [__webpack_require__(/*! ./info-adjuntos-consult.component.css */ "./src/app/components/consult/proyectos-consult/listarproyectos-consult/visualizar-proyectos-consult/info-adjuntos-consult/info-adjuntos-consult.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services_proyecto_service__WEBPACK_IMPORTED_MODULE_2__["ProyectoService"]])
    ], InfoAdjuntosConsultComponent);
    return InfoAdjuntosConsultComponent;
}());



/***/ }),

/***/ "./src/app/components/consult/proyectos-consult/listarproyectos-consult/visualizar-proyectos-consult/info-cliente-consult/info-cliente-consult.component.css":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./src/app/components/consult/proyectos-consult/listarproyectos-consult/visualizar-proyectos-consult/info-cliente-consult/info-cliente-consult.component.css ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/consult/proyectos-consult/listarproyectos-consult/visualizar-proyectos-consult/info-cliente-consult/info-cliente-consult.component.html":
/*!********************************************************************************************************************************************************************!*\
  !*** ./src/app/components/consult/proyectos-consult/listarproyectos-consult/visualizar-proyectos-consult/info-cliente-consult/info-cliente-consult.component.html ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nabvar-consult>\n\n</app-nabvar-consult>\n<br>\n<div>\n    <button type=\"button\" class=\"myButton\" onclick=\"history.back()\"><span class=\"glyphicon glyphicon-circle-arrow-left\"></span>Atras</button>\n</div>\n<br>\n<div class=\"card bg-light mb-3\" style=\"max-width: 80rem;\">\n    <div class=\"container\">\n        <form class=\"px-4 py-3\">\n            <form role=\"form\" id=\"register-form\" autocomplete=\"off\">\n                <div class=\"form-header\">\n                    <h3 style=\"text-align: center\" class=\"form-title\"><i class=\"fa fa-user\"></i> Información Cliente</h3>\n                    <hr>\n                    <br>\n                </div>\n\n                <div class=\"form-body\">\n                    <div class=\"form-group\">\n                        <label for=\"codigo\">Código Cliente</label>\n                        <input type=\"text\" class=\"form-control\" id=\"codigo\" name=\"codigo\" [(ngModel)]=\"cliente.codigo\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"codigo\">Nombre Cliente</label>\n                        <input type=\"text\" class=\"form-control\" id=\"nombre\" name=\"nombre\" [(ngModel)]=\"cliente.nombre\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"exampleDropdownFormEmail1\">Descripción</label>\n                        <textarea class=\"form-control\" aria-label=\"With textarea\" id=\"descripcion\" name=\"descripcion\" [(ngModel)]=\"cliente.descripcion\"></textarea>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"exampleDropdownFormEmail1\">Región</label>\n                        <input type=\"text\" class=\"form-control\" id=\"region\" name=\"region\" [(ngModel)]=\"cliente.region\">\n                        <span class=\"help-block\" id=\"error\"></span>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"exampleDropdownFormEmail1\">País</label>\n                        <input type=\"text\" class=\"form-control\" id=\"pais\" name=\"pais\" [(ngModel)]=\"cliente.pais\">\n                        <span class=\"help-block\" id=\"error\"></span>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"exampleDropdownFormEmail1\">Mercado</label>\n                        <input type=\"text\" class=\"form-control\" id=\"mercado\" name=\"mercado\" [(ngModel)]=\"cliente.mercado\">\n                        <span class=\"help-block\" id=\"error\"></span>\n                    </div>\n                    <div class=\"card\">\n                        <div class=\"card-header\">\n                            <h5 class=\"card-title\">Datos de Contacto del Cliente</h5>\n                        </div>\n                        <div class=\"card-body\">\n                            <label for=\"codigo\">Nombre de Contacto</label>\n                            <div class=\"custom-file\">\n                                <input type=\"text\" class=\"form-control\" id=\"Ncontacto\" name=\"Ncontacto\" [(ngModel)]=\"cliente.Ncontacto\">\n                            </div>\n                            <br>\n                            <br>\n                            <label for=\"codigo\">Email de Contacto</label>\n                            <div class=\"custom-file\">\n                                <input type=\"email\" class=\"form-control\" id=\"Econtacto\" name=\"Econtacto\" [(ngModel)]=\"cliente.Econtacto\">\n                            </div>\n                            <br>\n                            <br>\n                        </div>\n                    </div>\n                </div>\n                <hr>\n            </form>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/consult/proyectos-consult/listarproyectos-consult/visualizar-proyectos-consult/info-cliente-consult/info-cliente-consult.component.ts":
/*!******************************************************************************************************************************************************************!*\
  !*** ./src/app/components/consult/proyectos-consult/listarproyectos-consult/visualizar-proyectos-consult/info-cliente-consult/info-cliente-consult.component.ts ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: InfoClienteConsultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoClienteConsultComponent", function() { return InfoClienteConsultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_proyecto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/proyecto.service */ "./src/app/services/proyecto.service.ts");
/* harmony import */ var src_app_services_Cliente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/Cliente.service */ "./src/app/services/Cliente.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InfoClienteConsultComponent = /** @class */ (function () {
    function InfoClienteConsultComponent(router, route, proyectoService, clienteService) {
        this.router = router;
        this.route = route;
        this.proyectoService = proyectoService;
        this.clienteService = clienteService;
        this.cliente = {
            codigo: '',
            nombre: '',
            descripcion: '',
            region: '',
            pais: '',
            mercado: '',
            Ncontacto: '',
            Econtacto: ''
        };
        this.proyecto = {
            codigo: '',
            nombre: '',
            descripcion: '',
            cliente: '',
            adjuntoUrl: [],
        };
    }
    InfoClienteConsultComponent.prototype.ngOnInit = function () {
        this.getInfoClienteOfProyecto();
    };
    InfoClienteConsultComponent.prototype.getInfoClienteOfProyecto = function () {
        var _this = this;
        this.clientProyecto = this.route.snapshot.params['cliente'];
        var collection = this.clienteService.getOneClienteofProyecto(this.clientProyecto);
        collection.subscribe(function (docs) {
            _this.cliente = docs[0];
        });
    };
    InfoClienteConsultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-info-cliente-consult',
            template: __webpack_require__(/*! ./info-cliente-consult.component.html */ "./src/app/components/consult/proyectos-consult/listarproyectos-consult/visualizar-proyectos-consult/info-cliente-consult/info-cliente-consult.component.html"),
            styles: [__webpack_require__(/*! ./info-cliente-consult.component.css */ "./src/app/components/consult/proyectos-consult/listarproyectos-consult/visualizar-proyectos-consult/info-cliente-consult/info-cliente-consult.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services_proyecto_service__WEBPACK_IMPORTED_MODULE_2__["ProyectoService"],
            src_app_services_Cliente_service__WEBPACK_IMPORTED_MODULE_3__["ClienteService"]])
    ], InfoClienteConsultComponent);
    return InfoClienteConsultComponent;
}());



/***/ }),

/***/ "./src/app/components/consult/proyectos-consult/listarproyectos-consult/visualizar-proyectos-consult/visualizar-proyectos-consult.component.css":
/*!******************************************************************************************************************************************************!*\
  !*** ./src/app/components/consult/proyectos-consult/listarproyectos-consult/visualizar-proyectos-consult/visualizar-proyectos-consult.component.css ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/consult/proyectos-consult/listarproyectos-consult/visualizar-proyectos-consult/visualizar-proyectos-consult.component.html":
/*!*******************************************************************************************************************************************************!*\
  !*** ./src/app/components/consult/proyectos-consult/listarproyectos-consult/visualizar-proyectos-consult/visualizar-proyectos-consult.component.html ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nabvar-consult>\n\n</app-nabvar-consult>\n<br>\n<br>\n<app-nav-visualizar-proyecto>\n\n</app-nav-visualizar-proyecto>\n\n<div class=\"container main-container \">\n\n    <router-outlet></router-outlet>\n\n</div>\n<br>\n<br>\n<div class=\"card bg-light mb-3\" style=\"max-width: 80rem;\">\n    <div class=\"container\">\n        <form class=\"px-4 py-3\">\n            <form role=\"form\" id=\"register-form\" autocomplete=\"off\">\n                <div class=\"form-header\">\n                    <h3 style=\"text-align: center\" class=\"form-title\"><i class=\"fa fa-user\"></i> Información Básica del proyecto</h3>\n                    <hr>\n                    <br>\n                </div>\n\n                <div class=\"form-body\">\n                    <div class=\"form-group\">\n                        <label for=\"codigo\">Código Proyecto</label>\n                        <input type=\"text\" class=\"form-control\" id=\"codigoproy\" name=\"codigoproy\" [(ngModel)]=\"proyecto.codigo\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"codigo\">Nombre Proyecto</label>\n                        <input type=\"text\" class=\"form-control\" id=\"nombre\" name=\"nombre\" [(ngModel)]=\"proyecto.nombre\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"exampleDropdownFormEmail1\">Descripción</label>\n                        <textarea class=\"form-control\" aria-label=\"With textarea\" id=\"descripcion\" name=\"descripcion\" [(ngModel)]=\"proyecto.descripcion\"></textarea>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"exampleDropdownFormEmail1\">Cliente</label>\n                        <input type=\"text\" class=\"form-control\" id=\"cliente\" name=\"cliente\" [(ngModel)]=\"proyecto.cliente\">\n                        <span class=\"help-block\" id=\"error\"></span>\n                    </div>\n\n                </div>\n            </form>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/consult/proyectos-consult/listarproyectos-consult/visualizar-proyectos-consult/visualizar-proyectos-consult.component.ts":
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/app/components/consult/proyectos-consult/listarproyectos-consult/visualizar-proyectos-consult/visualizar-proyectos-consult.component.ts ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: VisualizarProyectosConsultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizarProyectosConsultComponent", function() { return VisualizarProyectosConsultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_proyecto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/proyecto.service */ "./src/app/services/proyecto.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VisualizarProyectosConsultComponent = /** @class */ (function () {
    function VisualizarProyectosConsultComponent(router, route, proyectoService) {
        this.router = router;
        this.route = route;
        this.proyectoService = proyectoService;
        this.proyecto = {
            codigo: '',
            nombre: '',
            descripcion: '',
            cliente: '',
            adjuntoUrl: [],
        };
    }
    VisualizarProyectosConsultComponent.prototype.ngOnInit = function () {
        this.getInfoProyecto();
    };
    VisualizarProyectosConsultComponent.prototype.getInfoProyecto = function () {
        var _this = this;
        this.codProyecto = this.route.snapshot.params['codigo'];
        var collection = this.proyectoService.getOneProyecto(this.codProyecto);
        collection.subscribe(function (docs) {
            _this.proyecto = docs[0];
        });
    };
    VisualizarProyectosConsultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-visualizar-proyectos-consult',
            template: __webpack_require__(/*! ./visualizar-proyectos-consult.component.html */ "./src/app/components/consult/proyectos-consult/listarproyectos-consult/visualizar-proyectos-consult/visualizar-proyectos-consult.component.html"),
            styles: [__webpack_require__(/*! ./visualizar-proyectos-consult.component.css */ "./src/app/components/consult/proyectos-consult/listarproyectos-consult/visualizar-proyectos-consult/visualizar-proyectos-consult.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services_proyecto_service__WEBPACK_IMPORTED_MODULE_2__["ProyectoService"]])
    ], VisualizarProyectosConsultComponent);
    return VisualizarProyectosConsultComponent;
}());



/***/ }),

/***/ "./src/app/components/consult/proyectos-consult/proyectos-consult.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/components/consult/proyectos-consult/proyectos-consult.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/consult/proyectos-consult/proyectos-consult.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/consult/proyectos-consult/proyectos-consult.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nabvar-consult>\n\n</app-nabvar-consult>\n<br>\n<div class=\"cotainer\">\n    <h3 style=\"text-align: center\">Zona de Consulta de Proyectos</h3>\n    <hr>\n\n    <P style=\"text-align: center\">Ha igresado como Usuario de Consulta de la App Web PMO</P>\n    <br><br><br><br><br><br><br><br><br><br>\n    <hr>\n    <div class=\"text-center\" id=\"contenedor\">\n        <img src=\"/assets/img/LogoIS.ico\" class=\"rounded \" alt=\"... \" class=\"rounded-circle\">\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/consult/proyectos-consult/proyectos-consult.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/consult/proyectos-consult/proyectos-consult.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ProyectosConsultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProyectosConsultComponent", function() { return ProyectosConsultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProyectosConsultComponent = /** @class */ (function () {
    function ProyectosConsultComponent() {
    }
    ProyectosConsultComponent.prototype.ngOnInit = function () {
    };
    ProyectosConsultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-proyectos-consult',
            template: __webpack_require__(/*! ./proyectos-consult.component.html */ "./src/app/components/consult/proyectos-consult/proyectos-consult.component.html"),
            styles: [__webpack_require__(/*! ./proyectos-consult.component.css */ "./src/app/components/consult/proyectos-consult/proyectos-consult.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProyectosConsultComponent);
    return ProyectosConsultComponent;
}());



/***/ }),

/***/ "./src/app/components/control-acceso/control-acceso.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/control-acceso/control-acceso.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/control-acceso/control-acceso.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/control-acceso/control-acceso.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div class=\"cotainer\">\r\n    <h3 style=\"text-align: center\">Aplicación Web PMO</h3>\r\n    <hr>\r\n\r\n    <P style=\"text-align: center\">Pantalla Inicial de la aplicación web, puede contener el logo de la compañía e información de la misma</P>\r\n    <br><br><br><br><br><br><br><br><br><br>\r\n    <hr>\r\n    <div class=\"text-center\" id=\"contenedor\">\r\n        <img src=\"/assets/img/LogoIS.ico\" class=\"rounded \" alt=\"... \" class=\"rounded-circle\">\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/control-acceso/control-acceso.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/control-acceso/control-acceso.component.ts ***!
  \***********************************************************************/
/*! exports provided: ControlAccesoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlAccesoComponent", function() { return ControlAccesoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ControlAccesoComponent = /** @class */ (function () {
    function ControlAccesoComponent() {
    }
    ControlAccesoComponent.prototype.ngOnInit = function () {
    };
    ControlAccesoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-control-acceso',
            template: __webpack_require__(/*! ./control-acceso.component.html */ "./src/app/components/control-acceso/control-acceso.component.html"),
            styles: [__webpack_require__(/*! ./control-acceso.component.css */ "./src/app/components/control-acceso/control-acceso.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ControlAccesoComponent);
    return ControlAccesoComponent;
}());



/***/ }),

/***/ "./src/app/components/control-acceso/listar/listar.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/control-acceso/listar/listar.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/control-acceso/listar/listar.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/control-acceso/listar/listar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nabvar-admin>\r\n\r\n</app-nabvar-admin>\r\n<br>\r\n<app-nav-usuarios>\r\n\r\n</app-nav-usuarios>\r\n\r\n<div class=\"container main-container \">\r\n\r\n    <router-outlet></router-outlet>\r\n\r\n</div>\r\n<div class=\"container \">\r\n    <br>\r\n    <h3 style=\"text-align: center \">Listado de Usuarios</h3>\r\n    <table class=\"table \">\r\n        <thead class=\"list-group-item-danger \">\r\n            <tr class=\"light bg-light\">\r\n                <th scope=\"col \">Usuarios</th>\r\n                <td></td>\r\n                <th style=\"text-align: center \" scope=\"col \">Acciones</th>\r\n\r\n\r\n        </thead>\r\n\r\n        <tbody *ngFor=\"let user of users\">\r\n            <tr>\r\n                <th scope=\"row \">{{user.email}}</th>\r\n                <td> <button [routerLink]=\"['/visualizarUsuario', user.email]\" class=\"myButton\">\r\n                        <span class=\"glyphicon glyphicon-eye-open\"></span> Visualizar\r\n                    </button></td>\r\n                <td><button [routerLink]=\"['/modificarUsuario', user.email]\" class=\"myButton\">\r\n                        <span class=\"glyphicon glyphicon-edit\"></span> Modificar\r\n                    </button></td>\r\n            </tr>\r\n        </tbody>\r\n    </table>"

/***/ }),

/***/ "./src/app/components/control-acceso/listar/listar.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/control-acceso/listar/listar.component.ts ***!
  \**********************************************************************/
/*! exports provided: ListarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListarComponent", function() { return ListarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListarComponent = /** @class */ (function () {
    function ListarComponent(authService) {
        this.authService = authService;
    }
    ListarComponent.prototype.ngOnInit = function () {
        this.todosUsuarioss();
    };
    ListarComponent.prototype.todosUsuarioss = function () {
        var _this = this;
        this.authService.getAllUsers().subscribe(function (users) { return _this.users = users; });
    };
    ListarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listar',
            template: __webpack_require__(/*! ./listar.component.html */ "./src/app/components/control-acceso/listar/listar.component.html"),
            styles: [__webpack_require__(/*! ./listar.component.css */ "./src/app/components/control-acceso/listar/listar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], ListarComponent);
    return ListarComponent;
}());



/***/ }),

/***/ "./src/app/components/control-acceso/listar/modificar-usuario/modificar-usuario.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/control-acceso/listar/modificar-usuario/modificar-usuario.component.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/control-acceso/listar/modificar-usuario/modificar-usuario.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/control-acceso/listar/modificar-usuario/modificar-usuario.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nabvar-admin>\r\n\r\n</app-nabvar-admin>\r\n<br>\r\n<div>\r\n    <button type=\"button\" class=\"myButton\" onclick=\"history.back()\"><span class=\"glyphicon glyphicon-circle-arrow-left\"></span>Atras</button>\r\n</div>\r\n\r\n<br>\r\n<div class=\"card bg-light mb-3 mx-auto\" style=\"max-width: 50rem; \">\r\n    <div class=\"container\">\r\n        <form class=\"px-4 py-3 \">\r\n            <form role=\"form \" id=\"register-form \" autocomplete=\"off \">\r\n                <div class=\"form-header \">\r\n                    <h3 style=\"text-align: center \" class=\"form-title \"><i class=\"fa fa-user \"></i> Modificar Información Usuario</h3>\r\n                    <hr>\r\n                    <br>\r\n                </div>\r\n\r\n                <form #formModificarUser=\"ngForm\" (ngSubmit)=\"onModificarUser(formModificarUser)\">\r\n                    <div class=\"form-group row was-validated\">\r\n                        <label for=\"nombres\" class=\"col-2 col-form-label\">Nombres<Span class=\"rojo\">*</Span></label>\r\n                        <div class=\"col-md-10\">\r\n                            <input size=\"50\" class=\"form-control\" type=\"text\" #input [value]=\"input.value.toUpperCase()\" placeholder=\"Nombres\" id=\"nombres\" name=\"nombres\" [(ngModel)]=\"user.nombres\" minlength=\"3\" required #nombres=\"ngModel\" disabled>\r\n                            <div *ngIf=\"nombres?.errors?.required && (nombres.touched)\" class=\"invalid-feedback\">Este campo es requerido</div>\r\n                            <div *ngIf=\"nombres?.errors?.minlength && (nombres.touched)\" class=\"invalid-feedback\">Mínimo 3 caracteres</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row was-validated\">\r\n                        <label for=\"apellidos\" class=\"col-2 col-form-label\">Apellidos<Span class=\"rojo\">*</Span></label>\r\n                        <div class=\"col-md-10\">\r\n                            <input size=\"50\" class=\"form-control\" type=\"text\" #input1 [value]=\"input1.value.toUpperCase()\" placeholder=\"Apellidos\" id=\"apellidos\" name=\"apellidos\" [(ngModel)]=\"user.apellidos\" minlength=\"3\" required #apellidos=\"ngModel\" disabled>\r\n                            <div *ngIf=\"apellidos?.errors?.required && (apellidos.touched)\" class=\"invalid-feedback\">Este campo es requerido</div>\r\n                            <div *ngIf=\"apellidos?.errors?.minlength && (apellidos.touched)\" class=\"invalid-feedback\">Mínimo 3 caracteres</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row was-validated\">\r\n                        <label for=\"email\" class=\"col-2 col-form-label\">Email<Span class=\"rojo\">*</Span></label>\r\n                        <div class=\"col-md-10\">\r\n                            <input size=\"50\" class=\"form-control\" type=\"email\" #input2 [value]=\"input2.value.toUpperCase()\" placeholder=\"Email@mail.com\" id=\"email\" name=\"email\" [(ngModel)]=\"user.email\" required #email=\"ngModel\">\r\n                            <div *ngIf=\"email?.errors?.required && (email.touched)\" class=\"invalid-feedback\">Este campo es requerido</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row was-validated\">\r\n                        <label for=\"perfil\" class=\"col-2 col-form-label\">Perfil<Span class=\"rojo\">*</Span></label>\r\n                        <div class=\"col-md-10\">\r\n                            <select class=\"form-control\" id=\"role\" name=\"role\" style=\"width:595px\" size=\"1\" [(ngModel)]=\"user.role\" required #role=\"ngModel\">\r\n                                    <option value=\"\">SELECCIONE UN ROL</option>\r\n                                    <option value=\"ADMIN\">ADMINISTRADOR</option>\r\n                                    <option value=\"CONSULT\">CONSULTOR</option>\r\n                                </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row was-validated\">\r\n                        <label for=\"perfil\" class=\"col-2 col-form-label\">Estado<Span class=\"rojo\">*</Span></label>\r\n                        <div class=\"col-md-10\">\r\n                            <select class=\"form-control\" id=\"estado\" name=\"estado\" style=\"width:595px\" size=\"1\" [(ngModel)]=\"user.estado\" required #role=\"ngModel\">\r\n                                        <option value=\"\">SELECCIONE ESTADO</option>\r\n                                        <option value=\"ACTIVO\">ACTIVO</option>\r\n                                        <option value=\"INACTIVO\">INACTIVO</option>\r\n                                    </select>\r\n                        </div>\r\n                    </div>\r\n                    <label for=\"email\" class=\"col-6 col-form-label\"><Span class = \"rojo\">*</Span>Campos Obligatorios</label>\r\n                    <hr>\r\n                    <div class=\"row\">\r\n                        <div class=\"col\">\r\n                            <button type=\"submit\" class=\" myButton btn-block \"> Guardar Cambios </button>\r\n                        </div>\r\n                    </div>\r\n                    <hr>\r\n                </form>\r\n            </form>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/control-acceso/listar/modificar-usuario/modificar-usuario.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/control-acceso/listar/modificar-usuario/modificar-usuario.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ModificarUsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModificarUsuarioComponent", function() { return ModificarUsuarioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModificarUsuarioComponent = /** @class */ (function () {
    function ModificarUsuarioComponent(authService, router, route, ngFlashMensaje) {
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.ngFlashMensaje = ngFlashMensaje;
        this.user = {
            nombres: '',
            apellidos: '',
            email: '',
            password: '',
            role: '',
            estado: '',
        };
    }
    ModificarUsuarioComponent.prototype.ngOnInit = function () {
        this.getInfoModUsuario();
    };
    ModificarUsuarioComponent.prototype.getInfoModUsuario = function () {
        var _this = this;
        this.emailUser = this.route.snapshot.params['email'];
        var collection = this.authService.getOneUser(this.emailUser);
        collection.subscribe(function (docs) {
            _this.user = docs[0];
        });
    };
    ModificarUsuarioComponent.prototype.onModificarUser = function (_a) {
        var _this = this;
        var value = _a.value;
        this.authService.getAuth().subscribe(function (user) {
            value.email = _this.emailUser;
            _this.authService.updateUser(value);
            // tslint:disable-next-line:max-line-length
            _this.ngFlashMensaje.showFlashMessage({ messages: ['Usuario Modificado Correctamente'], dismissible: true, timeout: 5000, type: 'success' });
            _this.router.navigate(['/visualizarUsuario/' + _this.emailUser]);
        });
    };
    ModificarUsuarioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modificar-usuario',
            template: __webpack_require__(/*! ./modificar-usuario.component.html */ "./src/app/components/control-acceso/listar/modificar-usuario/modificar-usuario.component.html"),
            styles: [__webpack_require__(/*! ./modificar-usuario.component.css */ "./src/app/components/control-acceso/listar/modificar-usuario/modificar-usuario.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"]])
    ], ModificarUsuarioComponent);
    return ModificarUsuarioComponent;
}());



/***/ }),

/***/ "./src/app/components/control-acceso/listar/visualizar-usuario/visualizar-usuario.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/components/control-acceso/listar/visualizar-usuario/visualizar-usuario.component.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/control-acceso/listar/visualizar-usuario/visualizar-usuario.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/control-acceso/listar/visualizar-usuario/visualizar-usuario.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nabvar-admin>\r\n\r\n</app-nabvar-admin>\r\n<br>\r\n<div>\r\n    <button type=\"button\" class=\"myButton\" onclick=\"history.back()\"><span class=\"glyphicon glyphicon-circle-arrow-left\"></span>Atras</button>\r\n</div>\r\n\r\n<br>\r\n<div class=\"card bg-light mb-3 mx-auto\" style=\"max-width: 50rem; \">\r\n    <div class=\"container\">\r\n        <form class=\"px-4 py-3\">\r\n            <form role=\"form\" id=\"register-form\" autocomplete=\"off\">\r\n                <div class=\"form-header\">\r\n                    <h3 style=\"text-align: center\" class=\"form-title\"><i class=\"fa fa-user\"></i> Información Usuario</h3>\r\n                    <hr>\r\n                    <br>\r\n                </div>\r\n\r\n                <form>\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"nombres\" class=\"col-3 col-form-label\">Nombres</label>\r\n                        <div>\r\n                            <div class=\"input-group \">\r\n                                <input type=\"text\" size=\"50\" class=\"form-control\" id=\"nombres\" name=\"nombres\" [(ngModel)]=\"user.nombres\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"apellidos\" class=\"col-3 col-form-label\">Apellidos</label>\r\n                        <div>\r\n                            <div class=\"input-group \">\r\n                                <input type=\"text\" size=\"50\" class=\"form-control\" id=\"apellidos\" name=\"apellidos\" [(ngModel)]=\"user.apellidos\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"email\" class=\"col-3 col-form-label\">Email</label>\r\n                        <div>\r\n                            <input type=\"text\" size=\"50\" class=\"form-control\" id=\"email\" name=\"email\" [(ngModel)]=\"user.email\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"perfil\" class=\"col-3 col-form-label\">Perfil</label>\r\n                        <div>\r\n                            <input type=\"text\" size=\"50\" class=\"form-control\" id=\"rol\" name=\"rol\" [(ngModel)]=\"user.role\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"perfil\" class=\"col-3 col-form-label\">Estado</label>\r\n                        <div>\r\n                            <input type=\"text\" size=\"50\" class=\"form-control\" id=\"estado\" name=\"estado\" [(ngModel)]=\"user.estado\">\r\n                        </div>\r\n                    </div>\r\n\r\n                </form>\r\n            </form>\r\n        </form>\r\n\r\n        <hr>\r\n    </div>\r\n</div>\r\n<form>"

/***/ }),

/***/ "./src/app/components/control-acceso/listar/visualizar-usuario/visualizar-usuario.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/control-acceso/listar/visualizar-usuario/visualizar-usuario.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: VisualizarUsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizarUsuarioComponent", function() { return VisualizarUsuarioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VisualizarUsuarioComponent = /** @class */ (function () {
    function VisualizarUsuarioComponent(router, route, userService) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.user = {
            nombres: '',
            apellidos: '',
            email: '',
            password: '',
            role: '',
            estado: '',
        };
    }
    VisualizarUsuarioComponent.prototype.ngOnInit = function () {
        this.getInfoUser();
    };
    VisualizarUsuarioComponent.prototype.getInfoUser = function () {
        var _this = this;
        this.emailUser = this.route.snapshot.params['email'];
        var collection = this.userService.getOneUser(this.emailUser);
        collection.subscribe(function (docs) {
            _this.user = docs[0];
        });
    };
    VisualizarUsuarioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-visualizar-usuario',
            template: __webpack_require__(/*! ./visualizar-usuario.component.html */ "./src/app/components/control-acceso/listar/visualizar-usuario/visualizar-usuario.component.html"),
            styles: [__webpack_require__(/*! ./visualizar-usuario.component.css */ "./src/app/components/control-acceso/listar/visualizar-usuario/visualizar-usuario.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], VisualizarUsuarioComponent);
    return VisualizarUsuarioComponent;
}());



/***/ }),

/***/ "./src/app/components/control-acceso/nav-usuarios/nav-usuarios.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/components/control-acceso/nav-usuarios/nav-usuarios.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/control-acceso/nav-usuarios/nav-usuarios.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/control-acceso/nav-usuarios/nav-usuarios.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\">\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link active\" [routerLink]=\"['/registar']\">RESGISTRAR USUARIOS</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/listar']\">LISTA USUARIOS</a>\r\n    </li>\r\n</ul>"

/***/ }),

/***/ "./src/app/components/control-acceso/nav-usuarios/nav-usuarios.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/control-acceso/nav-usuarios/nav-usuarios.component.ts ***!
  \**********************************************************************************/
/*! exports provided: NavUsuariosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavUsuariosComponent", function() { return NavUsuariosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavUsuariosComponent = /** @class */ (function () {
    function NavUsuariosComponent() {
    }
    NavUsuariosComponent.prototype.ngOnInit = function () {
    };
    NavUsuariosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-usuarios',
            template: __webpack_require__(/*! ./nav-usuarios.component.html */ "./src/app/components/control-acceso/nav-usuarios/nav-usuarios.component.html"),
            styles: [__webpack_require__(/*! ./nav-usuarios.component.css */ "./src/app/components/control-acceso/nav-usuarios/nav-usuarios.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavUsuariosComponent);
    return NavUsuariosComponent;
}());



/***/ }),

/***/ "./src/app/components/control-acceso/registar/registar.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/control-acceso/registar/registar.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nabvar-admin>\r\n\r\n</app-nabvar-admin>\r\n<br>\r\n<app-nav-usuarios>\r\n\r\n</app-nav-usuarios>\r\n\r\n<div class=\"container main-container \">\r\n\r\n    <router-outlet></router-outlet>\r\n\r\n</div>\r\n<br>\r\n<br>\r\n<div class=\"card bg-light mb-3 mx-auto\" style=\"max-width: 50rem; \">\r\n    <div class=\"container\">\r\n        <form class=\"px-4 py-3\">\r\n            <form role=\"form\" id=\"register-form\" autocomplete=\"off\">\r\n                <div class=\"form-header\">\r\n                    <h3 style=\"text-align: center\" class=\"form-title\"><i class=\"fa fa-user\"></i> Registrar Usuarios</h3>\r\n                    <hr>\r\n                    <br>\r\n                </div>\r\n\r\n                <form (submit)=\"onSubmitAddUser(formGuardarUsers)\" #formGuardarUsers=\"ngForm\">\r\n                    <div class=\"form-group row was-validated\">\r\n                        <label for=\"nombres\" class=\"col-2 col-form-label\">Nombres<Span class=\"rojo\">*</Span></label>\r\n                        <div class=\"col-md-10\">\r\n                            <input size=\"50\" class=\"form-control\" type=\"text\" #input [value]=\"input.value.toUpperCase()\" placeholder=\"Nombres\" id=\"nombres\" name=\"nombres\" [(ngModel)]=\"user.nombres\" minlength=\"3\" required #nombres=\"ngModel\">\r\n                            <div *ngIf=\"nombres?.errors?.required && (nombres.touched)\" class=\"invalid-feedback\">Este campo es requerido</div>\r\n                            <div *ngIf=\"nombres?.errors?.minlength && (nombres.touched)\" class=\"invalid-feedback\">Mínimo 3 caracteres</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row was-validated\">\r\n                        <label for=\"apellidos\" class=\"col-2 col-form-label\">Apellidos<Span class=\"rojo\">*</Span></label>\r\n                        <div class=\"col-md-10\">\r\n                            <input size=\"50\" class=\"form-control\" type=\"text\" #input1 [value]=\"input1.value.toUpperCase()\" placeholder=\"Apellidos\" id=\"apellidos\" name=\"apellidos\" [(ngModel)]=\"user.apellidos\" minlength=\"3\" required #apellidos=\"ngModel\">\r\n                            <div *ngIf=\"apellidos?.errors?.required && (apellidos.touched)\" class=\"invalid-feedback\">Este campo es requerido</div>\r\n                            <div *ngIf=\"apellidos?.errors?.minlength && (apellidos.touched)\" class=\"invalid-feedback\">Mínimo 3 caracteres</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row was-validated\">\r\n                        <label for=\"email\" class=\"col-2 col-form-label\">Email<Span class=\"rojo\">*</Span></label>\r\n                        <div class=\"col-md-10\">\r\n                            <input size=\"50\" class=\"form-control\" type=\"email\" #input2 [value]=\"input2.value.toUpperCase()\" placeholder=\"Email@mail.com\" id=\"email\" name=\"email\" [(ngModel)]=\"user.email\" required #email=\"ngModel\">\r\n                            <div *ngIf=\"email?.errors?.required && (email.touched)\" class=\"invalid-feedback\">Este campo es requerido</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row was-validated\">\r\n                        <label for=\"login\" class=\"col-2 col-form-label\">Password<Span class=\"rojo\">*</Span></label>\r\n                        <div class=\"col-md-10\">\r\n                            <input size=\"50\" class=\"form-control\" type=\"password\" placeholder=\"Password\" id=\"password\" [(ngModel)]=\"user.password\" name=\"password\" minlength=\"6\" required #password=\"ngModel\">\r\n                            <div *ngIf=\"password?.errors?.required && (password.touched)\" class=\"invalid-feedback\">Este campo es requerido</div>\r\n                            <div *ngIf=\"password?.errors?.minlength && (password.touched)\" class=\"invalid-feedback\">Mínimo 6 caracteres</div>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"form-group row was-validated\">\r\n                        <label for=\"perfil\" class=\"col-2 col-form-label\">Perfil<Span class=\"rojo\">*</Span></label>\r\n                        <div class=\"col-md-10\">\r\n                            <select class=\"form-control\" id=\"role\" name=\"role\" style=\"width:595px\" size=\"1\" [(ngModel)]=\"user.role\" required #role=\"ngModel\">\r\n                                <option value=\"\">SELECCIONE UN ROL</option>\r\n                                <option value=\"ADMIN\">ADMINISTRADOR</option>\r\n                                <option value=\"CONSULT\">CONSULTOR</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row was-validated\">\r\n                        <label for=\"perfil\" class=\"col-2 col-form-label\">Estado<Span class=\"rojo\">*</Span></label>\r\n                        <div class=\"col-md-10\">\r\n                            <select class=\"form-control\" id=\"estado\" name=\"estado\" style=\"width:595px\" size=\"1\" [(ngModel)]=\"user.estado\" required #role=\"ngModel\">\r\n                                    <option value=\"\">SELECCIONE ESTADO</option>\r\n                                    <option value=\"ACTIVO\">ACTIVO</option>\r\n                                    <option value=\"ACTIVO\">INACTIVO</option>\r\n                                </select>\r\n                        </div>\r\n                    </div>\r\n                    <label for=\"email\" class=\"col-6 col-form-label\"><Span class=\"rojo\">*</Span>Campos Obligatorios</label>\r\n                    <hr>\r\n                    <div class=\"form-footer\">\r\n                        <button type=\"submit\" [disabled]=\"!formGuardarUsers.valid\" class=\" myButton btn-block \"><span\r\n                                class=\"glyphicon glyphicon-log-in \"></span><b>Registrar</b></button>\r\n\r\n                    </div>\r\n                    <hr>\r\n                </form>\r\n            </form>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/control-acceso/registar/registar.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/control-acceso/registar/registar.component.ts ***!
  \**************************************************************************/
/*! exports provided: RegistarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistarComponent", function() { return RegistarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegistarComponent = /** @class */ (function () {
    function RegistarComponent(authService, afs, router, ngFlashMensaje) {
        this.authService = authService;
        this.afs = afs;
        this.router = router;
        this.ngFlashMensaje = ngFlashMensaje;
        this.user = {
            nombres: '',
            apellidos: '',
            email: '',
            password: '',
            role: '',
            estado: '',
        };
    }
    RegistarComponent.prototype.ngOnInit = function () {
    };
    RegistarComponent.prototype.onSubmitAddUser = function (formGuardarUsers) {
        var _this = this;
        this.authService.addNewUser(formGuardarUsers.value).then(function (res) {
            _this.ngFlashMensaje.showFlashMessage({ messages: ['Usuario creado Correctamente'], dismissible: true, timeout: 5000, type: 'success' });
            _this.router.navigate(['/listar']);
        }).catch(function (err) {
            _this.ngFlashMensaje.showFlashMessage({ messages: [err], dismissible: true, timeout: 5000, type: 'danger' });
        });
    };
    RegistarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registar',
            template: __webpack_require__(/*! ./registar.component.html */ "./src/app/components/control-acceso/registar/registar.component.html"),
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"]])
    ], RegistarComponent);
    return RegistarComponent;
}());



/***/ }),

/***/ "./src/app/components/gestion-clientes/crear-cliente/crear-cliente.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/components/gestion-clientes/crear-cliente/crear-cliente.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/gestion-clientes/crear-cliente/crear-cliente.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/gestion-clientes/crear-cliente/crear-cliente.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nabvar-admin>\r\n\r\n</app-nabvar-admin>\r\n<br>\r\n<app-nav-clientes>\r\n\r\n</app-nav-clientes>\r\n\r\n<div class=\"container main-container\">\r\n\r\n    <router-outlet></router-outlet>\r\n\r\n</div>\r\n<br>\r\n<br>\r\n\r\n<div class=\"card bg-light mb-3\" style=\"max-width: 80rem;\">\r\n    <div class=\"container\">\r\n        <form class=\"px-4 py-3\">\r\n            <form role=\"form\" id=\"register-form\" autocomplete=\"off\">\r\n                <div class=\"form-header\">\r\n                    <h3 style=\"text-align: center\" class=\"form-title\"><i class=\"fa fa-user\"></i> Formulario Nuevo Cliente\r\n                    </h3>\r\n                    <hr>\r\n                    <br>\r\n                </div>\r\n                <form (ngSubmit)=\"onGuardarCliente(formGuardarCliente)\" #formGuardarCliente=\"ngForm\" novalidate=\"\">\r\n                    <div class=\"form-group was-validated\">\r\n                        <label for=\"codigo\">Código Cliente<Span class=\"rojo\">*</Span></label>\r\n                        <input type=\"text\" class=\"form-control\" #input [value]=\"input.value.toUpperCase()\" placeholder=\"Código\" id=\"codigo\" name=\"codigo\" [(ngModel)]=\"cliente.codigo\" required #codigo=\"ngModel\">\r\n                        <div *ngIf=\"codigo?.errors?.required && (codigo.touched)\" class=\"invalid-feedback\">Este campo es requerido</div>\r\n                        <div *ngIf=\"codigo?.errors?.minlength && (codigo.touched)\" class=\"invalid-feedback\">Mínimo 3 caracteres\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group was-validated\">\r\n                        <label for=\"nombre\">Nombre Cliente<Span class=\"rojo\">*</Span></label>\r\n                        <input type=\"text\" class=\"form-control\" #input1 [value]=\"input1.value.toUpperCase()\" placeholder=\"Nombre\" id=\"nombre\" name=\"nombre\" [(ngModel)]=\"cliente.nombre\" required #nombre=\"ngModel\">\r\n                        <div *ngIf=\"nombre?.errors?.required && (nombre.touched)\" class=\"invalid-feedback\">Este campo es requerido</div>\r\n                        <div *ngIf=\"nombre?.errors?.minlength\" class=\"invalid-feedback\">Mínimo 3 caracteres</div>\r\n                    </div>\r\n                    <div class=\"form-group was-validated\">\r\n                        <label for=\"descripcion\">Descripción<Span class=\"rojo\">*</Span></label>\r\n                        <textarea class=\"form-control is-invalid\" #input4 [value]=\"input4.value.toUpperCase()\" placeholder=\"Descripción\" aria-label=\"With textarea\" id=\"descripcion\" name=\"descripcion\" [(ngModel)]=\"cliente.descripcion\" required #descripcion=\"ngModel\"></textarea>\r\n                        <div *ngIf=\"descripcion?.errors?.required && (descripcion.touched)\" class=\"invalid-feedback\">Este campo es requerido</div>\r\n                        <div *ngIf=\"descripcion?.errors?.minlength\" class=\"invalid-feedback\">Mínimo 2 caracteres</div>\r\n                    </div>\r\n                    <div class=\"form-group was-validated\">\r\n                        <label for=\"region\">Región<Span class=\"rojo\">*</Span></label>\r\n                        <select class=\"custom-select\" id=\"region\" name=\"region\" [(ngModel)]=\"cliente.region\" #region=\"ngModel\" required>\r\n                            <option value=\"\">SELECCIONE UNA REGIÓN</option>\r\n                            <option *ngFor=\"let region of regiones\" [value]=\"region.nombre\">{{region.nombre}}</option>\r\n                            <div *ngIf=\"region?.errors?.required && (codigo.touched)\" class=\"invalid-feedback\">Debe\r\n                                seleccionar una región</div>\r\n                        </select>\r\n                    </div>\r\n                    <div class=\"form-group was-validated\">\r\n                        <label for=\"pais\">País<Span class=\"rojo\">*</Span></label>\r\n                        <div>\r\n                            <select *ngIf=\"region.value === 'EUROPA'\" class=\"form-control is-invalid\" id=\"pais\" name=\"pais\" [(ngModel)]=\"cliente.pais\" #pais=\"ngModel\" required>\r\n                                <option value=\"\">SELECCIONE UN PAIS</option>\r\n                                <option value=\"ESPAÑA\">ESPAÑA</option>\r\n                                <option value=\"GIBRALTAR\">GIBRALTAR</option>\r\n                        </select>\r\n                        </div>\r\n                        <div>\r\n                            <select *ngIf=\"region.value === 'LATINOAMERICA'\" class=\"form-control is-invalid\" id=\"pais\" name=\"pais\" [(ngModel)]=\"cliente.pais\" #pais=\"ngModel\" required>\r\n                            <option value=\"\">SELECCIONE UN PAIS</option>\r\n                            <option value=\"COLOMBIA\">COLOMBIA</option>\r\n                            <option value=\"ECUADOR\">ECUADOR</option>\r\n                            <option value=\"CHILE\">CHILE</option>\r\n                            <option value=\"PERÚ\">PERÚ</option>\r\n                            <option value=\"MEXICO\">MEXICO</option>\r\n                            <option value=\"PUERTO RICO\">PUERTO RICO</option>\r\n                    </select>\r\n                        </div>\r\n                        <div>\r\n                            <select *ngIf=\"region.value === 'AFRICA'\" class=\"form-control is-invalid\" id=\"pais\" name=\"pais\" [(ngModel)]=\"cliente.pais\" #pais=\"ngModel\" required>\r\n                                    <option value=\"\">SELECCIONE UN PAIS</option>\r\n                                    <option value=\"MARRUECOS\">MARRUECOS</option>\r\n                            </select>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"form-group was-validated\">\r\n                        <label for=\"mercado\">Mercado<Span class=\"rojo\">*</Span></label>\r\n                        <select class=\"custom-select\" id=\"mercado\" name=\"mercado\" [(ngModel)]=\"cliente.mercado\" #mercado=\"ngModel\" required>\r\n                            <option value=\"\">SELECCIONE UN MERCADO</option>\r\n                            <option *ngFor=\"let mercado of mercados\" [value]=\"mercado.nombre\">{{mercado.nombre}}</option>\r\n                            <div *ngIf=\"region?.errors?.required && (region.touched)\" class=\"invalid-feedback\">Debe\r\n                                seleccionar un mercado</div>\r\n                        </select>\r\n                    </div>\r\n                    <br>\r\n                    <br>\r\n                    <div class=\"card\">\r\n                        <div class=\"card-header\">\r\n                            <h5 class=\"card-title\">Datos de Contacto del Cliente</h5>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                            <div class=\"form-group was-validated\">\r\n                                <label for=\"codigo\">Nombre de Contacto<Span class=\"rojo\">*</Span></label>\r\n                                <input type=\"text\" class=\"form-control\" #input2 [value]=\"input2.value.toUpperCase()\" placeholder=\"Nombre del contacto\" id=\"Ncontacto\" name=\"Ncontacto\" [(ngModel)]=\"cliente.Ncontacto\" required #ncontacto=\"ngModel\">\r\n                                <div *ngIf=\"ncontacto?.errors?.required && (ncontacto.touched)\" class=\"invalid-feedback\">Este campo es requerido</div>\r\n                                <div *ngIf=\"ncontacto?.errors?.minlength && (ncontacto.touched)\" class=\"invalid-feedback\">Mínimo 3 caracteres</div>\r\n                            </div>\r\n                            <div class=\"form-group was-validated\">\r\n                                <label for=\"codigo\">Email de Contacto<Span class=\"rojo\">*</Span></label>\r\n                                <input type=\"Email\" class=\"form-control\" #input3 [value]=\"input3.value.toUpperCase()\" placeholder=\"Email del contacto\" id=\"Econtacto\" name=\"Econtacto\" [(ngModel)]=\"cliente.Econtacto\" required #econtacto=\"ngModel\">\r\n                                <div *ngIf=\"econtacto?.errors?.required && (econtacto.touched)\" class=\"invalid-feedback\">Este campo es requerido</div>\r\n                                <div *ngIf=\"econtacto?.errors?.minlength && (econtacto.touched)\" class=\"invalid-feedback\">Mínimo 3 caracteres</div>\r\n                            </div>\r\n                            <br>\r\n                        </div>\r\n                    </div>\r\n                    <label for=\"obligatorios\" class=\"col-6 col-form-label\"><Span class=\"rojo\">*</Span>Campos\r\n                        Obligatorios</label>\r\n                    <hr>\r\n                    <div class=\"form-footer\">\r\n                        <button type=\"submit\" [disabled]=\"!formGuardarCliente.valid\" class=\" myButton btn-block \">\r\n                            Registrar</button>\r\n                        <hr>\r\n                    </div>\r\n                </form>\r\n            </form>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/gestion-clientes/crear-cliente/crear-cliente.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/gestion-clientes/crear-cliente/crear-cliente.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CrearClienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearClienteComponent", function() { return CrearClienteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_Cliente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/Cliente.service */ "./src/app/services/Cliente.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CrearClienteComponent = /** @class */ (function () {
    function CrearClienteComponent(authService, clienteService, router, ngFlashMensaje) {
        this.authService = authService;
        this.clienteService = clienteService;
        this.router = router;
        this.ngFlashMensaje = ngFlashMensaje;
        this.cliente = {
            codigo: '',
            nombre: '',
            descripcion: '',
            region: '',
            pais: '',
            mercado: '',
            Ncontacto: '',
            Econtacto: ''
        };
        this.regiones = [{
                nombre: 'EUROPA'
            },
            {
                nombre: 'LATINOAMERICA'
            },
            {
                nombre: 'AFRICA'
            },
        ];
        this.mercados = [{
                nombre: 'T&O'
            },
            {
                nombre: 'U&I'
            },
            {
                nombre: 'S&M'
            },
            {
                nombre: 'PREVENTA'
            },
            {
                nombre: 'PRODUCTOS INTERNOS'
            },
        ];
    }
    CrearClienteComponent.prototype.ngOnInit = function () {
    };
    CrearClienteComponent.prototype.onGuardarCliente = function (formGuardarCliente) {
        this.clienteService.addNewCliente(formGuardarCliente.value);
        this.ngFlashMensaje.showFlashMessage({ messages: ['Cliente Creado correctamente'],
            dismissible: true, timeout: 5000, type: 'success' });
        this.router.navigate(['/listarCliente']);
    };
    CrearClienteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-crear-cliente',
            template: __webpack_require__(/*! ./crear-cliente.component.html */ "./src/app/components/gestion-clientes/crear-cliente/crear-cliente.component.html"),
            styles: [__webpack_require__(/*! ./crear-cliente.component.css */ "./src/app/components/gestion-clientes/crear-cliente/crear-cliente.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            src_app_services_Cliente_service__WEBPACK_IMPORTED_MODULE_3__["ClienteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__["NgFlashMessageService"]])
    ], CrearClienteComponent);
    return CrearClienteComponent;
}());



/***/ }),

/***/ "./src/app/components/gestion-clientes/gestion-clientes.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/gestion-clientes/gestion-clientes.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/gestion-clientes/gestion-clientes.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/gestion-clientes/gestion-clientes.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div class=\"cotainer\">\r\n    <h3 style=\"text-align: center\">Aplicación Web PMO</h3>\r\n    <hr>\r\n\r\n    <P style=\"text-align: center\">Pantalla Inicial de la aplicación web, puede contener el logo de la compañía e información de la misma</P>\r\n    <br><br><br><br><br><br><br><br><br><br>\r\n    <hr>\r\n    <div class=\"text-center\" id=\"contenedor\">\r\n        <img src=\"/assets/img/LogoIS.ico\" class=\"rounded \" alt=\"... \" class=\"rounded-circle\">\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/gestion-clientes/gestion-clientes.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/gestion-clientes/gestion-clientes.component.ts ***!
  \***************************************************************************/
/*! exports provided: GestionClientesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestionClientesComponent", function() { return GestionClientesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GestionClientesComponent = /** @class */ (function () {
    function GestionClientesComponent() {
    }
    GestionClientesComponent.prototype.ngOnInit = function () {
    };
    GestionClientesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gestion-clientes',
            template: __webpack_require__(/*! ./gestion-clientes.component.html */ "./src/app/components/gestion-clientes/gestion-clientes.component.html"),
            styles: [__webpack_require__(/*! ./gestion-clientes.component.css */ "./src/app/components/gestion-clientes/gestion-clientes.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GestionClientesComponent);
    return GestionClientesComponent;
}());



/***/ }),

/***/ "./src/app/components/gestion-clientes/listar-cliente/listar-cliente.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/gestion-clientes/listar-cliente/listar-cliente.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/gestion-clientes/listar-cliente/listar-cliente.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/components/gestion-clientes/listar-cliente/listar-cliente.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nabvar-admin>\r\n\r\n</app-nabvar-admin>\r\n<br>\r\n<app-nav-clientes>\r\n\r\n</app-nav-clientes>\r\n\r\n<div class=\"container main-container \">\r\n\r\n    <router-outlet></router-outlet>\r\n\r\n</div>\r\n\r\n<div class=\"container \">\r\n    <br>\r\n    <h3 style=\"text-align: center \">Listado de Clientes</h3>\r\n    <table class=\"table \">\r\n        <thead class=\"list-group-item-danger \">\r\n            <tr class=\"light bg-light\">\r\n                <th scope=\"col \">Código</th>\r\n                <th scope=\"col \">Nombre</th>\r\n                <td></td>\r\n                <th scope=\"col \">Acciones</th>\r\n            </tr>\r\n        </thead>\r\n\r\n        <tbody *ngFor=\"let cliente of clientes\">\r\n            <tr>\r\n                <th scope=\"row \">{{cliente.codigo}}</th>\r\n                <td>{{cliente.nombre}}</td>\r\n                <td> <button [routerLink]=\"['/visualizarCliente', cliente.codigo]\" class=\"myButton\">\r\n                    <span class=\"glyphicon glyphicon-eye-open\"></span> Visualizar\r\n                    </button></td>\r\n                <td><button [routerLink]=\"['/modificarCliente', cliente.codigo]\" class=\"myButton\">\r\n                    <span class=\"glyphicon glyphicon-edit\"></span> Modificar\r\n                    </button></td>\r\n            </tr>\r\n        </tbody>\r\n    </table>"

/***/ }),

/***/ "./src/app/components/gestion-clientes/listar-cliente/listar-cliente.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/gestion-clientes/listar-cliente/listar-cliente.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ListarClienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListarClienteComponent", function() { return ListarClienteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_Cliente_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/Cliente.service */ "./src/app/services/Cliente.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListarClienteComponent = /** @class */ (function () {
    function ListarClienteComponent(clienteService) {
        this.clienteService = clienteService;
    }
    ListarClienteComponent.prototype.ngOnInit = function () {
        this.todosClientes();
    };
    ListarClienteComponent.prototype.todosClientes = function () {
        var _this = this;
        this.clienteService.getAllClientes().subscribe(function (clientes) { return _this.clientes = clientes; });
    };
    ListarClienteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listar-cliente',
            template: __webpack_require__(/*! ./listar-cliente.component.html */ "./src/app/components/gestion-clientes/listar-cliente/listar-cliente.component.html"),
            styles: [__webpack_require__(/*! ./listar-cliente.component.css */ "./src/app/components/gestion-clientes/listar-cliente/listar-cliente.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_Cliente_service__WEBPACK_IMPORTED_MODULE_1__["ClienteService"]])
    ], ListarClienteComponent);
    return ListarClienteComponent;
}());



/***/ }),

/***/ "./src/app/components/gestion-clientes/listar-cliente/modificar-cliente/modificar-cliente.component.css":
/*!**************************************************************************************************************!*\
  !*** ./src/app/components/gestion-clientes/listar-cliente/modificar-cliente/modificar-cliente.component.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/gestion-clientes/listar-cliente/modificar-cliente/modificar-cliente.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/components/gestion-clientes/listar-cliente/modificar-cliente/modificar-cliente.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nabvar-admin>\r\n\r\n</app-nabvar-admin>\r\n<br>\r\n<div>\r\n    <button type=\"button\" class=\"myButton\" onclick=\"history.back()\"><span class=\"glyphicon glyphicon-circle-arrow-left\"></span>Atras</button>\r\n</div>\r\n\r\n<br>\r\n<div class=\"card bg-light mb-3\" style=\"max-width: 80rem;\">\r\n    <div class=\"container\">\r\n        <form class=\"px-4 py-3\">\r\n            <form role=\"form\" id=\"register-form\" autocomplete=\"off\">\r\n                <div class=\"form-header\">\r\n                    <h3 style=\"text-align: center\" class=\"form-title\"><i class=\"fa fa-user\"></i> Modificar Información del Cliente</h3>\r\n                    <hr>\r\n                    <br>\r\n                </div>\r\n\r\n                <form #formModificarCliente=\"ngForm\" (ngSubmit)=\"onModificarCliente(formModificarCliente)\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"codigo\">Código Cliente<Span class=\"rojo\">*</Span></label>\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Código\" id=\"codigo\" name=\"codigo\" [(ngModel)]=\"cliente.codigo\" disabled=\"true\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"nombre\">Nombre Cliente<Span class=\"rojo\">*</Span></label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"nombre\" name=\"nombre\" [(ngModel)]=\"cliente.nombre\" disabled=\"true\">\r\n                    </div>\r\n                    <div class=\"form-group was-validated\">\r\n                        <label for=\"exampleDropdownFormEmail1\">Descripción</label>\r\n                        <textarea class=\"form-control is-invalid\" #input5 [value]=\"input5.value.toUpperCase()\" id=\"descripcion\" name=\"descripcion\" [(ngModel)]=\"cliente.descripcion\" required #descripcion=\"ngModel\"></textarea>\r\n                        <div *ngIf=\"descripcion?.errors?.required && (descripcion.touched)\" class=\"invalid-feedback\">Este campo es requerido</div>\r\n                    </div>\r\n                    <div class=\"form-group was-validated\">\r\n                        <label for=\"region\">Región<Span class=\"rojo\">*</Span></label>\r\n                        <select class=\"form-control is-invalid\" id=\"region\" name=\"region\" [(ngModel)]=\"cliente.region\" #region=\"ngModel\" required>\r\n                            <option *ngFor=\"let region of regiones\" [value]=\"region.nombre\">{{region.nombre}}</option>\r\n                        </select>\r\n                    </div>\r\n\r\n                    <div class=\"form-group was-validated\">\r\n                        <label for=\"pais\">País<Span class=\"rojo\">*</Span></label>\r\n                        <div>\r\n                            <select *ngIf=\"region.value === 'EUROPA'\" class=\"form-control is-invalid\" id=\"pais\" name=\"pais\" [(ngModel)]=\"cliente.pais\" #pais1=\"ngModel\" required>\r\n                                <option value=\"ESPAÑA\">ESPAÑA</option>\r\n                                <option value=\"GIBRALTAR\">GIBRALTAR</option>\r\n                            </select>\r\n                        </div>\r\n                        <div>\r\n                            <select *ngIf=\"region.value === 'LATINOAMERICA'\" class=\"form-control is-valid\" id=\"pais\" name=\"pais\" [(ngModel)]=\"cliente.pais\" #pais2=\"ngModel\" required>\r\n                                <option value=\"COLOMBIA\">COLOMBIA</option>\r\n                                <option value=\"ECUADOR\">ECUADOR</option>\r\n                                <option value=\"CHILE\">CHILE</option>\r\n                                <option value=\"PERÚ\">PERÚ</option>\r\n                                <option value=\"MEXICO\">MEXICO</option>\r\n                                <option value=\"PUERTO RICO\">PUERTO RICO</option>\r\n                            </select>\r\n                        </div>\r\n                        <div>\r\n                            <select *ngIf=\"region.value === 'AFRICA'\" class=\"form-control is-invalid\" id=\"pais\" name=\"pais\" [(ngModel)]=\"cliente.pais\" #pais3=\"ngModel\" required>\r\n                                <option value=\"MARRUECOS\">MARRUECOS</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group was-validated\">\r\n                        <label for=\"mercado\">Mercado<Span class=\"rojo\">*</Span></label>\r\n                        <select class=\"form-control is-invalid\" id=\"mercado\" name=\"mercado\" [(ngModel)]=\"cliente.mercado\" #mercado=\"ngModel\" required>\r\n                            <option value=\"T&O\">T&O</option>\r\n                            <option value=\"U&I\">U&I</option>\r\n                            <option value=\"S&M\">S&M</option>\r\n                            <option value=\"PREVENTA\">PREVENTA</option>\r\n                            <option value=\"PRODUCTOS INTERNOS\">PRODUCTOS INTERNOS</option>\r\n\r\n                        </select>\r\n                    </div>\r\n\r\n                    <br>\r\n                    <br>\r\n                    <div class=\"card\">\r\n                        <div class=\"card-header\">\r\n                            <h5 class=\"card-title\">Datos de Contacto del Cliente</h5>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                            <div class=\"form-group was-validated\">\r\n                                <label for=\"codigo\">Nombre de Contacto<Span class=\"rojo\">*</Span></label>\r\n                                <input type=\"text\" class=\"form-control\" #input2 [value]=\"input2.value.toUpperCase()\" placeholder=\"Nombre del contacto\" id=\"Ncontacto\" name=\"Ncontacto\" [(ngModel)]=\"cliente.Ncontacto\" required #ncontacto=\"ngModel\">\r\n                                <div *ngIf=\"ncontacto?.errors?.required && (ncontacto.touched)\" class=\"invalid-feedback\">Este campo es requerido</div>\r\n                                <div *ngIf=\"ncontacto?.errors?.minlength && (ncontacto.touched)\" class=\"invalid-feedback\">Mínimo 3 caracteres</div>\r\n                            </div>\r\n                            <div class=\"form-group was-validated\">\r\n                                <label for=\"codigo\">Email de Contacto<Span class=\"rojo\">*</Span></label>\r\n                                <input type=\"Email\" class=\"form-control\" #input3 [value]=\"input3.value.toUpperCase()\" placeholder=\"Email del contacto\" id=\"Econtacto\" name=\"Econtacto\" [(ngModel)]=\"cliente.Econtacto\" required #econtacto=\"ngModel\">\r\n                                <div *ngIf=\"econtacto?.errors?.required && (econtacto.touched)\" class=\"invalid-feedback\">Este campo es requerido</div>\r\n                                <div *ngIf=\"econtacto?.errors?.minlength && (econtacto.touched)\" class=\"invalid-feedback\">Mínimo 3 caracteres</div>\r\n                            </div>\r\n                            <br>\r\n                        </div>\r\n                    </div>\r\n                    <label for=\"email\" class=\"col-6 col-form-label\"><Span class=\"rojo\">*</Span>Campos Obligatorios</label>\r\n                    <hr>\r\n                    <div class=\"row\">\r\n                        <div class=\"col\">\r\n                            <button type=\"submit\" class=\" myButton btn-block \"> Guardar Cambios </button>\r\n                        </div>\r\n                    </div>\r\n                    <hr>\r\n                </form>\r\n\r\n\r\n            </form>\r\n\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/gestion-clientes/listar-cliente/modificar-cliente/modificar-cliente.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/components/gestion-clientes/listar-cliente/modificar-cliente/modificar-cliente.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ModificarClienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModificarClienteComponent", function() { return ModificarClienteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_Cliente_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/Cliente.service */ "./src/app/services/Cliente.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ModificarClienteComponent = /** @class */ (function () {
    function ModificarClienteComponent(authService, router, route, clienteService, ngFlashMensaje) {
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.clienteService = clienteService;
        this.ngFlashMensaje = ngFlashMensaje;
        this.cliente = {
            codigo: '',
            nombre: '',
            descripcion: '',
            region: '',
            pais: '',
            mercado: '',
            Ncontacto: '',
            Econtacto: ''
        };
        this.regiones = [{
                nombre: 'EUROPA'
            },
            {
                nombre: 'LATINOAMERICA'
            },
            {
                nombre: 'AFRICA'
            },
        ];
    }
    ModificarClienteComponent.prototype.ngOnInit = function () {
        this.getInfoModCliente();
    };
    ModificarClienteComponent.prototype.getInfoModCliente = function () {
        var _this = this;
        this.codCliente = this.route.snapshot.params['codigo'];
        var collection = this.clienteService.getOneCliente(this.codCliente);
        collection.subscribe(function (docs) {
            _this.cliente = docs[0];
        });
    };
    ModificarClienteComponent.prototype.onModificarCliente = function (_a) {
        var _this = this;
        var value = _a.value;
        this.authService.getAuth().subscribe(function (user) {
            value.codigo = _this.codCliente;
            _this.clienteService.updateCliente(value);
            _this.ngFlashMensaje.showFlashMessage({ messages: ['Cliente Modificado correctamente'],
                dismissible: true, timeout: 5000, type: 'success' });
            _this.router.navigate(['/visualizarCliente/' + _this.codCliente]);
        });
    };
    ModificarClienteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modificar-cliente',
            template: __webpack_require__(/*! ./modificar-cliente.component.html */ "./src/app/components/gestion-clientes/listar-cliente/modificar-cliente/modificar-cliente.component.html"),
            styles: [__webpack_require__(/*! ./modificar-cliente.component.css */ "./src/app/components/gestion-clientes/listar-cliente/modificar-cliente/modificar-cliente.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_Cliente_service__WEBPACK_IMPORTED_MODULE_1__["ClienteService"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"]])
    ], ModificarClienteComponent);
    return ModificarClienteComponent;
}());



/***/ }),

/***/ "./src/app/components/gestion-clientes/listar-cliente/visualizar-cliente/visualizar-cliente.component.css":
/*!****************************************************************************************************************!*\
  !*** ./src/app/components/gestion-clientes/listar-cliente/visualizar-cliente/visualizar-cliente.component.css ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/gestion-clientes/listar-cliente/visualizar-cliente/visualizar-cliente.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/components/gestion-clientes/listar-cliente/visualizar-cliente/visualizar-cliente.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nabvar-admin>\r\n\r\n</app-nabvar-admin>\r\n<br>\r\n<div>\r\n    <button type=\"button\" class=\"myButton\" onclick=\"history.back()\"><span class=\"glyphicon glyphicon-circle-arrow-left\"></span>Atras</button>\r\n</div>\r\n\r\n<br>\r\n<div class=\"card bg-light mb-3\" style=\"max-width: 80rem;\">\r\n    <div class=\"container\">\r\n        <form class=\"px-4 py-3\">\r\n            <form role=\"form\" id=\"register-form\" autocomplete=\"off\">\r\n                <div class=\"form-header\">\r\n                    <h3 style=\"text-align: center\" class=\"form-title\"><i class=\"fa fa-user\"></i> Información Cliente</h3>\r\n                    <hr>\r\n                    <br>\r\n                </div>\r\n\r\n                <div class=\"form-body\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"codigo\">Código Cliente</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"codigo\" name=\"codigo\" [(ngModel)]=\"cliente.codigo\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"codigo\">Nombre Cliente</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"nombre\" name=\"nombre\" [(ngModel)]=\"cliente.nombre\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"exampleDropdownFormEmail1\">Descripción</label>\r\n                        <textarea class=\"form-control\" aria-label=\"With textarea\" id=\"descripcion\" name=\"descripcion\" [(ngModel)]=\"cliente.descripcion\"></textarea>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"exampleDropdownFormEmail1\">Región</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"region\" name=\"region\" [(ngModel)]=\"cliente.region\">\r\n                        <span class=\"help-block\" id=\"error\"></span>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"exampleDropdownFormEmail1\">País</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"pais\" name=\"pais\" [(ngModel)]=\"cliente.pais\">\r\n                        <span class=\"help-block\" id=\"error\"></span>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"exampleDropdownFormEmail1\">Mercado</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"mercado\" name=\"mercado\" [(ngModel)]=\"cliente.mercado\">\r\n                        <span class=\"help-block\" id=\"error\"></span>\r\n                    </div>\r\n                    <div class=\"card\">\r\n                        <div class=\"card-header\">\r\n                            <h5 class=\"card-title\">Datos de Contacto del Cliente</h5>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                            <label for=\"codigo\">Nombre de Contacto</label>\r\n                            <div class=\"custom-file\">\r\n                                <input type=\"text\" class=\"form-control\" id=\"Ncontacto\" name=\"Ncontacto\" [(ngModel)]=\"cliente.Ncontacto\">\r\n                            </div>\r\n                            <br>\r\n                            <br>\r\n                            <label for=\"codigo\">Email de Contacto</label>\r\n                            <div class=\"custom-file\">\r\n                                <input type=\"email\" class=\"form-control\" id=\"Econtacto\" name=\"Econtacto\" [(ngModel)]=\"cliente.Econtacto\">\r\n                            </div>\r\n                            <br>\r\n                            <br>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <hr>\r\n            </form>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/gestion-clientes/listar-cliente/visualizar-cliente/visualizar-cliente.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/components/gestion-clientes/listar-cliente/visualizar-cliente/visualizar-cliente.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: VisualizarClienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizarClienteComponent", function() { return VisualizarClienteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_Cliente_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/Cliente.service */ "./src/app/services/Cliente.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VisualizarClienteComponent = /** @class */ (function () {
    function VisualizarClienteComponent(router, route, clienteService) {
        this.router = router;
        this.route = route;
        this.clienteService = clienteService;
        this.cliente = {
            codigo: '',
            nombre: '',
            descripcion: '',
            region: '',
            pais: '',
            mercado: '',
            Ncontacto: '',
            Econtacto: ''
        };
    }
    VisualizarClienteComponent.prototype.ngOnInit = function () {
        this.getInfoCliente();
    };
    VisualizarClienteComponent.prototype.getInfoCliente = function () {
        var _this = this;
        this.codCliente = this.route.snapshot.params['codigo'];
        var collection = this.clienteService.getOneCliente(this.codCliente);
        collection.subscribe(function (docs) {
            _this.cliente = docs[0];
        });
    };
    VisualizarClienteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-visualizar-cliente',
            template: __webpack_require__(/*! ./visualizar-cliente.component.html */ "./src/app/components/gestion-clientes/listar-cliente/visualizar-cliente/visualizar-cliente.component.html"),
            styles: [__webpack_require__(/*! ./visualizar-cliente.component.css */ "./src/app/components/gestion-clientes/listar-cliente/visualizar-cliente/visualizar-cliente.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_Cliente_service__WEBPACK_IMPORTED_MODULE_1__["ClienteService"]])
    ], VisualizarClienteComponent);
    return VisualizarClienteComponent;
}());



/***/ }),

/***/ "./src/app/components/gestion-clientes/nav-clientes/nav-clientes.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/components/gestion-clientes/nav-clientes/nav-clientes.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/gestion-clientes/nav-clientes/nav-clientes.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/gestion-clientes/nav-clientes/nav-clientes.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\">\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link active\" [routerLink]=\"['/crearCliente']\">REGISTRAR CLIENTES</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/listarCliente']\">LISTA CLIENTES</a>\r\n    </li>\r\n</ul>"

/***/ }),

/***/ "./src/app/components/gestion-clientes/nav-clientes/nav-clientes.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/gestion-clientes/nav-clientes/nav-clientes.component.ts ***!
  \************************************************************************************/
/*! exports provided: NavClientesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavClientesComponent", function() { return NavClientesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavClientesComponent = /** @class */ (function () {
    function NavClientesComponent() {
    }
    NavClientesComponent.prototype.ngOnInit = function () {
    };
    NavClientesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-clientes',
            template: __webpack_require__(/*! ./nav-clientes.component.html */ "./src/app/components/gestion-clientes/nav-clientes/nav-clientes.component.html"),
            styles: [__webpack_require__(/*! ./nav-clientes.component.css */ "./src/app/components/gestion-clientes/nav-clientes/nav-clientes.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavClientesComponent);
    return NavClientesComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div class=\"cotainer\">\r\n    <h3 style=\"text-align: center\">Aplicación Web PMO</h3>\r\n    <hr>\r\n\r\n    <P style=\"text-align: center\">Pantalla Inicial de la aplicación web, puede contener el logo de la compañía e información de la misma</P>\r\n    <br><br><br><br><br><br><br><br><br><br>\r\n    <hr>\r\n    <div class=\"text-center\" id=\"contenedor\">\r\n        <img src=\"/assets/img/LogoIS.ico\" class=\"rounded \" alt=\"... \" class=\"rounded-circle\">\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/not-found/not-found.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<br>\r\n<div class=\"card bg-light mb-3 mx-auto\" style=\"max-width: 30rem; \">\r\n    <div class=\"container\">\r\n        <form class=\"px-4 py-3\">\r\n            <form role=\"form\" id=\"register-form\" autocomplete=\"off\">\r\n                <div class=\"form-header\">\r\n                    <h1 style=\"text-align: center\"><i class=\"fa fa-user\"></i> Oops!</h1>\r\n                    <h2 style=\"text-align: center\"><i class=\"fa fa-user\"></i>404 Página no encontrada</h2>\r\n                    <br>\r\n                </div>\r\n            </form>\r\n            <!--<div style=\"text-align: center\">\r\n                <a href=\"# \" class=\"myButton \"> <span class=\"glyphicon glyphicon-home \"></span> Ir a la Home Página</a>\r\n            </div>-->\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/components/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/components/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/proyectos/listar-proyecto/listar-proyecto.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/proyectos/listar-proyecto/listar-proyecto.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/proyectos/listar-proyecto/listar-proyecto.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/proyectos/listar-proyecto/listar-proyecto.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container main-container \">\r\n\r\n    <router-outlet></router-outlet>\r\n\r\n</div>\r\n\r\n<div class=\"container \">\r\n    <br>\r\n    <h3 style=\"text-align: center \">Listado de Proyectos</h3>\r\n    <table class=\"table \">\r\n        <thead class=\"list-group-item-danger \">\r\n            <tr class=\"light bg-light\">\r\n                <th scope=\"col \">Código</th>\r\n                <th scope=\"col \">Nombre</th>\r\n                <td></td>\r\n                <th scope=\"col \">Acciones</th>\r\n            </tr>\r\n        </thead>\r\n\r\n        <tbody *ngFor=\"let proyecto of proyectos\">\r\n            <tr>\r\n                <th scope=\"row \">{{proyecto.codigo}}</th>\r\n                <td>{{proyecto.nombre}}</td>\r\n                <td> <button [routerLink]=\"['/VisualizarProyectoAdmin', proyecto.codigo]\" class=\"myButton\">\r\n                        <span class=\"glyphicon glyphicon-eye-open\"></span> Visualizar\r\n                    </button></td>\r\n                <td><button [routerLink]=\"['/modificarProyecto', proyecto.codigo]\" class=\"myButton\">\r\n                        <span class=\"glyphicon glyphicon-edit\"></span> Modificar\r\n                    </button></td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>"

/***/ }),

/***/ "./src/app/components/proyectos/listar-proyecto/listar-proyecto.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/proyectos/listar-proyecto/listar-proyecto.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ListarProyectoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListarProyectoComponent", function() { return ListarProyectoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_proyecto_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/proyecto.service */ "./src/app/services/proyecto.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListarProyectoComponent = /** @class */ (function () {
    function ListarProyectoComponent(proycetoService) {
        this.proycetoService = proycetoService;
    }
    ListarProyectoComponent.prototype.ngOnInit = function () {
        this.todosProyectos();
    };
    ListarProyectoComponent.prototype.todosProyectos = function () {
        var _this = this;
        this.proycetoService.getAllProyectos().subscribe(function (proyectos) { return _this.proyectos = proyectos; });
    };
    ListarProyectoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listar-proyecto',
            template: __webpack_require__(/*! ./listar-proyecto.component.html */ "./src/app/components/proyectos/listar-proyecto/listar-proyecto.component.html"),
            styles: [__webpack_require__(/*! ./listar-proyecto.component.css */ "./src/app/components/proyectos/listar-proyecto/listar-proyecto.component.css")]
        }),
        __metadata("design:paramtypes", [_services_proyecto_service__WEBPACK_IMPORTED_MODULE_1__["ProyectoService"]])
    ], ListarProyectoComponent);
    return ListarProyectoComponent;
}());



/***/ }),

/***/ "./src/app/components/proyectos/listar-proyecto/modificar-proyecto/modificar-proyecto.component.css":
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/proyectos/listar-proyecto/modificar-proyecto/modificar-proyecto.component.css ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/proyectos/listar-proyecto/modificar-proyecto/modificar-proyecto.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/proyectos/listar-proyecto/modificar-proyecto/modificar-proyecto.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nabvar-admin>\r\n\r\n</app-nabvar-admin>\r\n<br>\r\n<div>\r\n    <button type=\"button\" class=\"myButton\" onclick=\"history.back()\"><span class=\"glyphicon glyphicon-circle-arrow-left\"></span>Atras</button>\r\n</div>\r\n\r\n<br>\r\n<div class=\"card bg-light mb-3\" style=\"max-width: 80rem;\">\r\n    <div class=\"container\">\r\n        <form class=\"px-4 py-3\">\r\n            <form role=\"form\" id=\"register-form\" autocomplete=\"off\">\r\n                <div class=\"form-header\">\r\n                    <h3 style=\"text-align: center\" class=\"form-title\"><i class=\"fa fa-user\"></i> Modificar Proyecto\r\n                    </h3>\r\n                    <hr>\r\n                    <br>\r\n                </div>\r\n                <form>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"codigo\">Código Proyecto<Span class=\"rojo\">*</Span></label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"codigo\" name=\"codigo\" [(ngModel)]=\"proyecto.codigo\" disabled>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"nombre\">Nombre Proyecto<Span class=\"rojo\">*</Span></label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"nombre\" name=\"nombre\" [(ngModel)]=\"proyecto.nombre\" disabled>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"descripcion\">Descripción<Span class=\"rojo\">*</Span></label>\r\n                        <textarea class=\"form-control\" aria-label=\"With textarea\" id=\"descripcion\" name=\"descripcion\" [(ngModel)]=\"proyecto.descripcion\" disabled></textarea>\r\n                    </div>\r\n\r\n                    <label for=\"cliente\">Cliente<Span class=\"rojo\">*</Span></label>\r\n                    <select class=\"form-control\" id=\"cliente\" name=\"cliente\" [(ngModel)]=\"proyecto.cliente\" disabled>\r\n                            <option selected>{{proyecto.cliente}}</option>\r\n    \r\n                        </select>\r\n                    <div class=\"form-group\" style=\"display: none\">\r\n                        <label for=\"nombre\">Adjuntos Proyecto<Span class=\"rojo\">*</Span></label>\r\n                        <input class=\"form-control\" type=\"text\" placeholder=\"Adjuntos\" id=\"adjuntoUrl\" name=\"adjuntoUrl\" [(ngModel)]=\"proyecto.adjuntoUrl\">\r\n                    </div>\r\n                    <br>\r\n                    <br>\r\n\r\n\r\n                    <table class=\"table\">\r\n                        <thead class=\"list-group-item-danger \">\r\n                            <tr class=\"light bg-light\">\r\n                                <th scope=\"col \">Archivos Adjuntos</th>\r\n                            </tr>\r\n                        </thead>\r\n\r\n                        <tbody>\r\n                            <tr *ngFor=\"let item of proyecto.adjuntoUrl\">\r\n                                <td> <a href={{item.url}} class=\"card-link\">{{item.nombre}}</a></td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n\r\n\r\n                    <form #formGuardarArchivo=\"ngForm\" (ngSubmit)=\"cargarArchivos(formGuardarArchivo)\">\r\n                        <div class=\"card\">\r\n                            <div class=\"card-header\">\r\n                                <h5 class=\"card-title\">Adjuntar Documentos</h5>\r\n                            </div>\r\n                            <div class=\"card-body\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-10\">\r\n                                        <input type=\"file\" class=\"multiple\" (change)=\"selectFile($event)\" id=\"docuemento\" name=\"docuemento\" accept=\".pdf\">\r\n                                    </div>\r\n                                    <div class=\"col-2\">\r\n                                        <div class=\"col-4\">\r\n                                            <button type=\"button\" class=\"myButton\" (click)=\"limpiarArchivos()\">\r\n                                                    limpiar</button>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"container\">\r\n                                <table class=\"table\">\r\n                                    <thead class=\"list-group-item-danger \">\r\n                                        <tr class=\"light bg-light\">\r\n                                            <th scope=\"col \">Nombre Archivo</th>\r\n                                            <th scope=\"col \">Tamaño</th>\r\n                                            <td></td>\r\n                                        </tr>\r\n                                    </thead>\r\n\r\n                                    <tbody>\r\n                                        <tr *ngFor=\"let archivo of archivos\">\r\n                                            <td>{{archivo.nombreAdjunto}}</td>\r\n                                            <td>{{archivo.adjunto.size / 1024 /1024 | number: '.2-2'}} MB</td>\r\n                                            <td>\r\n                                            </td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n\r\n                            </div>\r\n                        </div>\r\n                        <label for=\"email\" class=\"col-6 col-form-label\"><Span class=\"rojo\">*</Span>Campos\r\n                                Obligatorios</label>\r\n                        <hr>\r\n                        <div class=\"form-footer\">\r\n\r\n                            <button type=\"submit\" class=\" myButton btn-block\"> Guardar</button>\r\n                            <hr>\r\n                        </div>\r\n\r\n                    </form>\r\n                </form>\r\n            </form>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/proyectos/listar-proyecto/modificar-proyecto/modificar-proyecto.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/proyectos/listar-proyecto/modificar-proyecto/modificar-proyecto.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ModificarProyectoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModificarProyectoComponent", function() { return ModificarProyectoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_proyecto_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/proyecto.service */ "./src/app/services/proyecto.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_Cliente_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/Cliente.service */ "./src/app/services/Cliente.service.ts");
/* harmony import */ var src_app_Models_file_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Models/file-item */ "./src/app/Models/file-item.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ModificarProyectoComponent = /** @class */ (function () {
    function ModificarProyectoComponent(authService, router, route, proyectoService, ngFlashMensaje, clienteService) {
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.proyectoService = proyectoService;
        this.ngFlashMensaje = ngFlashMensaje;
        this.clienteService = clienteService;
        this.archivos = [];
        this.proyecto = {
            codigo: '',
            nombre: '',
            descripcion: '',
            cliente: '',
        };
    }
    ModificarProyectoComponent.prototype.ngOnInit = function () {
        this.getInfoModCliente();
        this.todosClientes();
    };
    ModificarProyectoComponent.prototype.todosClientes = function () {
        var _this = this;
        this.clienteService.getAllClientes().subscribe(function (clientes) { return _this.clientes = clientes; });
    };
    ModificarProyectoComponent.prototype.getInfoModCliente = function () {
        var _this = this;
        this.codProyecto = this.route.snapshot.params['codigo'];
        var collection = this.proyectoService.getOneProyecto(this.codProyecto);
        collection.subscribe(function (docs) {
            _this.proyecto = docs[0];
        });
    };
    ModificarProyectoComponent.prototype.selectFile = function (event) {
        var file = event.target.files[0];
        var nuevoArchivo = new src_app_Models_file_item__WEBPACK_IMPORTED_MODULE_6__["FileItem"](file);
        this.archivos.push(nuevoArchivo);
        console.log(this.archivos);
    };
    ModificarProyectoComponent.prototype.cargarArchivos = function () {
        this.proyectoService.cargarArchivosFirebase(this.archivos);
        this.router.navigate(['/listarProyectosAdmin']);
    };
    ModificarProyectoComponent.prototype.limpiarArchivos = function () {
        this.archivos = [];
        console.log(this.archivos);
    };
    ModificarProyectoComponent.prototype.onModificarProyecto = function (_a) {
        var _this = this;
        var value = _a.value;
        this.authService.getAuth().subscribe(function (user) {
            _this.proyectoService.cargarArchivosFirebase(_this.archivos);
            value.codigo = _this.codProyecto;
            _this.proyectoService.updateProyecto(value);
            _this.ngFlashMensaje.showFlashMessage({
                messages: ['ProyectoModificado Correctamente'],
                dismissible: true, timeout: 5000, type: 'success'
            });
            _this.router.navigate(['/VisualizarProyectoAdmin/' + _this.codProyecto]);
        });
    };
    ModificarProyectoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modificar-proyecto',
            template: __webpack_require__(/*! ./modificar-proyecto.component.html */ "./src/app/components/proyectos/listar-proyecto/modificar-proyecto/modificar-proyecto.component.html"),
            styles: [__webpack_require__(/*! ./modificar-proyecto.component.css */ "./src/app/components/proyectos/listar-proyecto/modificar-proyecto/modificar-proyecto.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_proyecto_service__WEBPACK_IMPORTED_MODULE_1__["ProyectoService"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"],
            src_app_services_Cliente_service__WEBPACK_IMPORTED_MODULE_5__["ClienteService"]])
    ], ModificarProyectoComponent);
    return ModificarProyectoComponent;
}());



/***/ }),

/***/ "./src/app/components/proyectos/listar-proyecto/visualizar-proyecto/info-adjuntos/info-adjuntos.component.css":
/*!********************************************************************************************************************!*\
  !*** ./src/app/components/proyectos/listar-proyecto/visualizar-proyecto/info-adjuntos/info-adjuntos.component.css ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/proyectos/listar-proyecto/visualizar-proyecto/info-adjuntos/info-adjuntos.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/components/proyectos/listar-proyecto/visualizar-proyecto/info-adjuntos/info-adjuntos.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container main-container \">\r\n\r\n    <router-outlet></router-outlet>\r\n\r\n</div>\r\n\r\n<div class=\"container \">\r\n    <br>\r\n    <h3 style=\"text-align: center \">Listado de Documentos Adjuntos</h3>\r\n    <table class=\"table \">\r\n        <thead class=\"list-group-item-danger \">\r\n            <tr class=\"light bg-light\">\r\n                <th scope=\"col \">DOCUMENTOS ADJUNTOS</th>\r\n            </tr>\r\n        </thead>\r\n        <!---->\r\n        <tbody *ngFor=\"let item of proyecto.adjuntoUrl\">\r\n            <tr>\r\n                <th><a href={{item.url}} class=\"card-link\">{{item.nombre}}</a></th>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>"

/***/ }),

/***/ "./src/app/components/proyectos/listar-proyecto/visualizar-proyecto/info-adjuntos/info-adjuntos.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/components/proyectos/listar-proyecto/visualizar-proyecto/info-adjuntos/info-adjuntos.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: InfoAdjuntosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoAdjuntosComponent", function() { return InfoAdjuntosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_proyecto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/proyecto.service */ "./src/app/services/proyecto.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InfoAdjuntosComponent = /** @class */ (function () {
    function InfoAdjuntosComponent(router, route, proyectoService) {
        this.router = router;
        this.route = route;
        this.proyectoService = proyectoService;
        this.proyecto = {
            codigo: '',
            nombre: '',
            descripcion: '',
            cliente: '',
            adjuntoUrl: [],
        };
    }
    InfoAdjuntosComponent.prototype.ngOnInit = function () {
        this.getInfoProyecto();
    };
    InfoAdjuntosComponent.prototype.getInfoProyecto = function () {
        var _this = this;
        this.codProyecto = this.route.snapshot.params['codigo'];
        var collection = this.proyectoService.getOneProyecto(this.codProyecto);
        collection.subscribe(function (docs) {
            _this.proyecto = docs[0];
        });
    };
    InfoAdjuntosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-info-adjuntos',
            template: __webpack_require__(/*! ./info-adjuntos.component.html */ "./src/app/components/proyectos/listar-proyecto/visualizar-proyecto/info-adjuntos/info-adjuntos.component.html"),
            styles: [__webpack_require__(/*! ./info-adjuntos.component.css */ "./src/app/components/proyectos/listar-proyecto/visualizar-proyecto/info-adjuntos/info-adjuntos.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services_proyecto_service__WEBPACK_IMPORTED_MODULE_2__["ProyectoService"]])
    ], InfoAdjuntosComponent);
    return InfoAdjuntosComponent;
}());



/***/ }),

/***/ "./src/app/components/proyectos/listar-proyecto/visualizar-proyecto/info-cliente/info-cliente.component.css":
/*!******************************************************************************************************************!*\
  !*** ./src/app/components/proyectos/listar-proyecto/visualizar-proyecto/info-cliente/info-cliente.component.css ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/proyectos/listar-proyecto/visualizar-proyecto/info-cliente/info-cliente.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/components/proyectos/listar-proyecto/visualizar-proyecto/info-cliente/info-cliente.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<br>\r\n<div class=\"card bg-light mb-3\" style=\"max-width: 80rem;\">\r\n    <div class=\"container\">\r\n        <form class=\"px-4 py-3\">\r\n            <form role=\"form\" id=\"register-form\" autocomplete=\"off\">\r\n                <div class=\"form-header\">\r\n                    <h3 style=\"text-align: center\" class=\"form-title\"><i class=\"fa fa-user\"></i> Información Cliente</h3>\r\n                    <hr>\r\n                    <br>\r\n                </div>\r\n\r\n                <div class=\"form-body\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"codigo\">Código Cliente</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"codigo\" name=\"codigo\" [(ngModel)]=\"cliente.codigo\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"codigo\">Nombre Cliente</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"nombre\" name=\"nombre\" [(ngModel)]=\"cliente.nombre\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"exampleDropdownFormEmail1\">Descripción</label>\r\n                        <textarea class=\"form-control\" aria-label=\"With textarea\" id=\"descripcion\" name=\"descripcion\" [(ngModel)]=\"cliente.descripcion\"></textarea>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"exampleDropdownFormEmail1\">Región</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"region\" name=\"region\" [(ngModel)]=\"cliente.region\">\r\n                        <span class=\"help-block\" id=\"error\"></span>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"exampleDropdownFormEmail1\">País</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"pais\" name=\"pais\" [(ngModel)]=\"cliente.pais\">\r\n                        <span class=\"help-block\" id=\"error\"></span>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"exampleDropdownFormEmail1\">Mercado</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"mercado\" name=\"mercado\" [(ngModel)]=\"cliente.mercado\">\r\n                        <span class=\"help-block\" id=\"error\"></span>\r\n                    </div>\r\n                    <div class=\"card\">\r\n                        <div class=\"card-header\">\r\n                            <h5 class=\"card-title\">Datos de Contacto del Cliente</h5>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                            <label for=\"codigo\">Nombre de Contacto</label>\r\n                            <div class=\"custom-file\">\r\n                                <input type=\"text\" class=\"form-control\" id=\"Ncontacto\" name=\"Ncontacto\" [(ngModel)]=\"cliente.Ncontacto\">\r\n                            </div>\r\n                            <br>\r\n                            <br>\r\n                            <label for=\"codigo\">Email de Contacto</label>\r\n                            <div class=\"custom-file\">\r\n                                <input type=\"email\" class=\"form-control\" id=\"Econtacto\" name=\"Econtacto\" [(ngModel)]=\"cliente.Econtacto\">\r\n                            </div>\r\n                            <br>\r\n                            <br>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <hr>\r\n            </form>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/proyectos/listar-proyecto/visualizar-proyecto/info-cliente/info-cliente.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/components/proyectos/listar-proyecto/visualizar-proyecto/info-cliente/info-cliente.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: InfoClienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoClienteComponent", function() { return InfoClienteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_proyecto_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../services/proyecto.service */ "./src/app/services/proyecto.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_Cliente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/Cliente.service */ "./src/app/services/Cliente.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InfoClienteComponent = /** @class */ (function () {
    function InfoClienteComponent(router, route, proyectoService, clienteService) {
        this.router = router;
        this.route = route;
        this.proyectoService = proyectoService;
        this.clienteService = clienteService;
        this.cliente = {
            codigo: '',
            nombre: '',
            descripcion: '',
            region: '',
            pais: '',
            mercado: '',
            Ncontacto: '',
            Econtacto: ''
        };
        this.proyecto = {
            codigo: '',
            nombre: '',
            descripcion: '',
            cliente: '',
            adjuntoUrl: [],
        };
    }
    InfoClienteComponent.prototype.ngOnInit = function () {
        this.getInfoClienteOfProyecto();
    };
    InfoClienteComponent.prototype.getInfoClienteOfProyecto = function () {
        var _this = this;
        this.clientProyecto = this.route.snapshot.params['cliente'];
        var collection = this.clienteService.getOneClienteofProyecto(this.clientProyecto);
        collection.subscribe(function (docs) {
            _this.cliente = docs[0];
        });
    };
    InfoClienteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-info-cliente',
            template: __webpack_require__(/*! ./info-cliente.component.html */ "./src/app/components/proyectos/listar-proyecto/visualizar-proyecto/info-cliente/info-cliente.component.html"),
            styles: [__webpack_require__(/*! ./info-cliente.component.css */ "./src/app/components/proyectos/listar-proyecto/visualizar-proyecto/info-cliente/info-cliente.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_proyecto_service__WEBPACK_IMPORTED_MODULE_1__["ProyectoService"],
            src_app_services_Cliente_service__WEBPACK_IMPORTED_MODULE_3__["ClienteService"]])
    ], InfoClienteComponent);
    return InfoClienteComponent;
}());



/***/ }),

/***/ "./src/app/components/proyectos/listar-proyecto/visualizar-proyecto/nav-visualizar-proyecto/nav-visualizar-proyecto.component.css":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/components/proyectos/listar-proyecto/visualizar-proyecto/nav-visualizar-proyecto/nav-visualizar-proyecto.component.css ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/proyectos/listar-proyecto/visualizar-proyecto/nav-visualizar-proyecto/nav-visualizar-proyecto.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/components/proyectos/listar-proyecto/visualizar-proyecto/nav-visualizar-proyecto/nav-visualizar-proyecto.component.html ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\">\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link active\" [routerLink]=\"['/VisualizarProyectoConsult', proyecto.codigo]\">INFORMACIÓN GENERAL</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/infoClienteConsult', proyecto.cliente]\">INFORMACIÓN CLIENTE</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/infoAdjuntosConsult', proyecto.codigo]\">DOCUMENTOS ADJUNTOS</a>\r\n    </li>\r\n</ul>"

/***/ }),

/***/ "./src/app/components/proyectos/listar-proyecto/visualizar-proyecto/nav-visualizar-proyecto/nav-visualizar-proyecto.component.ts":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/components/proyectos/listar-proyecto/visualizar-proyecto/nav-visualizar-proyecto/nav-visualizar-proyecto.component.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: NavVisualizarProyectoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavVisualizarProyectoComponent", function() { return NavVisualizarProyectoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_proyecto_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../services/proyecto.service */ "./src/app/services/proyecto.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_Cliente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/Cliente.service */ "./src/app/services/Cliente.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavVisualizarProyectoComponent = /** @class */ (function () {
    function NavVisualizarProyectoComponent(router, route, proyectoService, clienteService) {
        this.router = router;
        this.route = route;
        this.proyectoService = proyectoService;
        this.clienteService = clienteService;
        this.proyecto = {
            codigo: '',
            nombre: '',
            descripcion: '',
            cliente: '',
        };
    }
    NavVisualizarProyectoComponent.prototype.ngOnInit = function () {
        this.getInfoProyecto();
    };
    NavVisualizarProyectoComponent.prototype.getInfoProyecto = function () {
        var _this = this;
        this.codProyecto = this.route.snapshot.params['codigo'];
        var collection = this.proyectoService.getOneProyecto(this.codProyecto);
        collection.subscribe(function (docs) {
            _this.proyecto = docs[0];
        });
    };
    NavVisualizarProyectoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-visualizar-proyecto',
            template: __webpack_require__(/*! ./nav-visualizar-proyecto.component.html */ "./src/app/components/proyectos/listar-proyecto/visualizar-proyecto/nav-visualizar-proyecto/nav-visualizar-proyecto.component.html"),
            styles: [__webpack_require__(/*! ./nav-visualizar-proyecto.component.css */ "./src/app/components/proyectos/listar-proyecto/visualizar-proyecto/nav-visualizar-proyecto/nav-visualizar-proyecto.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_proyecto_service__WEBPACK_IMPORTED_MODULE_1__["ProyectoService"],
            src_app_services_Cliente_service__WEBPACK_IMPORTED_MODULE_3__["ClienteService"]])
    ], NavVisualizarProyectoComponent);
    return NavVisualizarProyectoComponent;
}());



/***/ }),

/***/ "./src/app/components/proyectos/listar-proyecto/visualizar-proyecto/visualizar-proyecto.component.css":
/*!************************************************************************************************************!*\
  !*** ./src/app/components/proyectos/listar-proyecto/visualizar-proyecto/visualizar-proyecto.component.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/proyectos/listar-proyecto/visualizar-proyecto/visualizar-proyecto.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/components/proyectos/listar-proyecto/visualizar-proyecto/visualizar-proyecto.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container main-container \">\r\n\r\n    <router-outlet></router-outlet>\r\n\r\n</div>\r\n<br>\r\n<br>\r\n<div class=\"card bg-light mb-3\" style=\"max-width: 80rem;\">\r\n    <div class=\"container\">\r\n        <form class=\"px-4 py-3\">\r\n            <form role=\"form\" id=\"register-form\" autocomplete=\"off\">\r\n                <div class=\"form-header\">\r\n                    <h3 style=\"text-align: center\" class=\"form-title\"><i class=\"fa fa-user\"></i> Información Básica del proyecto</h3>\r\n                    <hr>\r\n                    <br>\r\n                </div>\r\n\r\n                <div class=\"form-body\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"codigo\">Código Proyecto</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"codigoproy\" name=\"codigoproy\" [(ngModel)]=\"proyecto.codigo\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"codigo\">Nombre Proyecto</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"nombre\" name=\"nombre\" [(ngModel)]=\"proyecto.nombre\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"exampleDropdownFormEmail1\">Descripción</label>\r\n                        <textarea class=\"form-control\" aria-label=\"With textarea\" id=\"descripcion\" name=\"descripcion\" [(ngModel)]=\"proyecto.descripcion\"></textarea>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"exampleDropdownFormEmail1\">Cliente</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"cliente\" name=\"cliente\" [(ngModel)]=\"proyecto.cliente\">\r\n                        <span class=\"help-block\" id=\"error\"></span>\r\n                    </div>\r\n\r\n                </div>\r\n            </form>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/proyectos/listar-proyecto/visualizar-proyecto/visualizar-proyecto.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/proyectos/listar-proyecto/visualizar-proyecto/visualizar-proyecto.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: VisualizarProyectoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizarProyectoComponent", function() { return VisualizarProyectoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_proyecto_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/proyecto.service */ "./src/app/services/proyecto.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VisualizarProyectoComponent = /** @class */ (function () {
    function VisualizarProyectoComponent(router, route, proyectoService) {
        this.router = router;
        this.route = route;
        this.proyectoService = proyectoService;
        this.proyecto = {
            codigo: '',
            nombre: '',
            descripcion: '',
            cliente: '',
            adjuntoUrl: [],
        };
    }
    VisualizarProyectoComponent.prototype.ngOnInit = function () {
        this.getInfoProyecto();
    };
    VisualizarProyectoComponent.prototype.getInfoProyecto = function () {
        var _this = this;
        this.codProyecto = this.route.snapshot.params['codigo'];
        var collection = this.proyectoService.getOneProyecto(this.codProyecto);
        collection.subscribe(function (docs) {
            _this.proyecto = docs[0];
        });
    };
    VisualizarProyectoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-visualizar-proyecto',
            template: __webpack_require__(/*! ./visualizar-proyecto.component.html */ "./src/app/components/proyectos/listar-proyecto/visualizar-proyecto/visualizar-proyecto.component.html"),
            styles: [__webpack_require__(/*! ./visualizar-proyecto.component.css */ "./src/app/components/proyectos/listar-proyecto/visualizar-proyecto/visualizar-proyecto.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_proyecto_service__WEBPACK_IMPORTED_MODULE_1__["ProyectoService"]])
    ], VisualizarProyectoComponent);
    return VisualizarProyectoComponent;
}());



/***/ }),

/***/ "./src/app/components/proyectos/nav-proyectos/nav-proyectos.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/proyectos/nav-proyectos/nav-proyectos.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/proyectos/nav-proyectos/nav-proyectos.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/proyectos/nav-proyectos/nav-proyectos.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\">\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link active\" [routerLink]=\"['/nuevoProyecto']\">NUEVO PROYECTO</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/listarProyectosAdmin']\">LISTA PROYECTOS</a>\r\n    </li>\r\n</ul>"

/***/ }),

/***/ "./src/app/components/proyectos/nav-proyectos/nav-proyectos.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/proyectos/nav-proyectos/nav-proyectos.component.ts ***!
  \*******************************************************************************/
/*! exports provided: NavProyectosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavProyectosComponent", function() { return NavProyectosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavProyectosComponent = /** @class */ (function () {
    function NavProyectosComponent() {
    }
    NavProyectosComponent.prototype.ngOnInit = function () {
    };
    NavProyectosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-proyectos',
            template: __webpack_require__(/*! ./nav-proyectos.component.html */ "./src/app/components/proyectos/nav-proyectos/nav-proyectos.component.html"),
            styles: [__webpack_require__(/*! ./nav-proyectos.component.css */ "./src/app/components/proyectos/nav-proyectos/nav-proyectos.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavProyectosComponent);
    return NavProyectosComponent;
}());



/***/ }),

/***/ "./src/app/components/proyectos/nuevo-proyecto/nuevo-proyecto.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/proyectos/nuevo-proyecto/nuevo-proyecto.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nabvar-admin>\r\n\r\n</app-nabvar-admin>\r\n<br>\r\n\r\n<app-nav-proyectos></app-nav-proyectos>\r\n\r\n<div class=\"container main-container \">\r\n\r\n    <router-outlet></router-outlet>\r\n</div>\r\n\r\n<br>\r\n<br>\r\n<div class=\"card bg-light mb-3\" style=\"max-width: 80rem;\">\r\n    <div class=\"container\">\r\n        <form class=\"px-4 py-3\">\r\n            <form role=\"form\" id=\"register-form\" autocomplete=\"off\">\r\n                <div class=\"form-header\">\r\n                    <h3 style=\"text-align: center\" class=\"form-title\"><i class=\"fa fa-user\"></i> Formulario Nuevo proyecto\r\n                    </h3>\r\n                    <hr>\r\n                    <br>\r\n                </div>\r\n                <form (ngSubmit)=\"onGuardarProyecto(formGuardarProyecto)\" #formGuardarProyecto=\"ngForm\" novalidate=\"\">\r\n                    <div class=\"form-group was-validated\">\r\n                        <label for=\"codigo\">Código Proyecto<Span class=\"rojo\">*</Span></label>\r\n                        <input class=\"form-control\" type=\"text\" #input [value]=\"input.value.toUpperCase()\" placeholder=\"Código\" id=\"codigo\" name=\"codigo\" [(ngModel)]=\"proyecto.codigo\" minlength=\"3\" required #codigo=\"ngModel\">\r\n                        <div *ngIf=\"codigo?.errors?.required && (codigo.touched)\" class=\"invalid-feedback\">Este campo es requerido</div>\r\n                        <div *ngIf=\"codigo?.errors?.minlength && (codigo.touched)\" class=\"invalid-feedback\">Mínimo 3 caracteres</div>\r\n                    </div>\r\n                    <div class=\"form-group was-validated\">\r\n                        <label for=\"nombre\">Nombre Proyecto<Span class=\"rojo\">*</Span></label>\r\n                        <input class=\"form-control\" type=\"text\" #input1 [value]=\"input1.value.toUpperCase()\" placeholder=\"Nombre\" id=\"nombre\" name=\"nombre\" [(ngModel)]=\"proyecto.nombre\" minlength=\"3\" required #nombre=\"ngModel\">\r\n                        <div *ngIf=\"nombre?.errors?.required && (nombre.touched)\" class=\"invalid-feedback\">Este campo es requerido</div>\r\n                        <div *ngIf=\"nombre?.errors?.minlength\" class=\"invalid-feedback\">Mínimo 3 caracteres</div>\r\n                    </div>\r\n                    <div class=\"form-group was-validated\">\r\n                        <label for=\"descripcion\">Descripción<Span class=\"rojo\">*</Span></label>\r\n                        <textarea class=\"form-control\" #input2 [value]=\"input2.value.toUpperCase()\" placeholder=\"Descripción\" aria-label=\"With textarea\" id=\"descripcion\" name=\"descripcion\" [(ngModel)]=\"proyecto.descripcion\" minlength=\"2\" required required #descripcion=\"ngModel\"></textarea>\r\n                        <div *ngIf=\"descripcion?.errors?.required && (descripcion.touched)\" class=\"invalid-feedback\">Este campo es requerido</div>\r\n                        <div *ngIf=\"descripcion?.errors?.minlength\" class=\"invalid-feedback\">Mínimo 2 caracteres</div>\r\n                    </div>\r\n                    <div class=\"form-group was-validated\">\r\n                        <label for=\"cliente\">Cliente<Span class=\"rojo\">*</Span></label>\r\n                        <select class=\"form-control is-invalid\" id=\"cliente\" name=\"cliente\" [(ngModel)]=\"proyecto.cliente\" #cliente=\"ngModel\" required>\r\n                        <option value=\"\">SELECCIONE UN CLIENTE</option>\r\n                        <option *ngFor=\"let cliente of clientes\" [value]=\"cliente.codigo\">{{cliente.codigo}}</option>\r\n                        </select>\r\n                        <div *ngIf=\"cliente?.errors?.required && (codigo.touched)\" class=\"invalid-feedback\">Debe seleccionar un cliente</div>\r\n                    </div>\r\n                    <div class=\"form-group\" style=\"display: none\">\r\n                        <label for=\"nombre\">Adjuntos Proyecto<Span class=\"rojo\">*</Span></label>\r\n                        <input class=\"form-control\" type=\"text\" placeholder=\"Adjuntos\" id=\"adjuntoUrl\" name=\"adjuntoUrl\" [(ngModel)]=\"proyecto.adjuntoUrl\">\r\n                    </div>\r\n                    <label for=\"campos\" class=\"col-6 col-form-label\"><Span class=\"rojo\">*</Span>Campos Obligatorios</label>\r\n                    <br>\r\n                    <hr>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-6\">\r\n                            <button type=\"submit\" [disabled]=\"!formGuardarProyecto.valid\" class=\" myButton btn-btn\">  Adjuntar documentos</button>\r\n                        </div>\r\n                        <hr>\r\n                    </div>\r\n                    <hr>\r\n                </form>\r\n            </form>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/proyectos/nuevo-proyecto/nuevo-proyecto.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/proyectos/nuevo-proyecto/nuevo-proyecto.component.ts ***!
  \*********************************************************************************/
/*! exports provided: NuevoProyectoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevoProyectoComponent", function() { return NuevoProyectoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_proyecto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/proyecto.service */ "./src/app/services/proyecto.service.ts");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var src_app_services_Cliente_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/Cliente.service */ "./src/app/services/Cliente.service.ts");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _Models_file_item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Models/file-item */ "./src/app/Models/file-item.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var NuevoProyectoComponent = /** @class */ (function () {
    function NuevoProyectoComponent(authService, proyectoService, router, clienteService, storage, ngFlashMensaje) {
        this.authService = authService;
        this.proyectoService = proyectoService;
        this.router = router;
        this.clienteService = clienteService;
        this.storage = storage;
        this.ngFlashMensaje = ngFlashMensaje;
        this.archivos = [];
        this.proyecto = {
            codigo: '',
            nombre: '',
            descripcion: '',
            cliente: '',
            adjuntoUrl: [],
        };
    }
    NuevoProyectoComponent.prototype.ngOnInit = function () {
        this.todosClientes();
    };
    NuevoProyectoComponent.prototype.todosClientes = function () {
        var _this = this;
        this.clienteService.getAllClientes().subscribe(function (clientes) { return _this.clientes = clientes; });
    };
    NuevoProyectoComponent.prototype.selectFile = function (event) {
        var file = event.target.files[0];
        var nuevoArchivo = new _Models_file_item__WEBPACK_IMPORTED_MODULE_7__["FileItem"](file);
        this.archivos.push(nuevoArchivo);
        console.log(this.archivos);
    };
    NuevoProyectoComponent.prototype.cargarArchivos = function () {
        this.proyectoService.cargarArchivosFirebase(this.archivos);
    };
    NuevoProyectoComponent.prototype.limpiarArchivos = function () {
        this.archivos = [];
        console.log(this.archivos);
    };
    NuevoProyectoComponent.prototype.onGuardarProyecto = function (formGuardarProyecto) {
        this.proyectoService.addNewProyecto(formGuardarProyecto.value);
        this.router.navigate(['/nuevoProyectoAdjuntos', this.proyecto.codigo]);
    };
    NuevoProyectoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nuevo-proyecto',
            template: __webpack_require__(/*! ./nuevo-proyecto.component.html */ "./src/app/components/proyectos/nuevo-proyecto/nuevo-proyecto.component.html"),
        }),
        __metadata("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _services_proyecto_service__WEBPACK_IMPORTED_MODULE_3__["ProyectoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_Cliente_service__WEBPACK_IMPORTED_MODULE_5__["ClienteService"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_8__["NgFlashMessageService"]])
    ], NuevoProyectoComponent);
    return NuevoProyectoComponent;
}());



/***/ }),

/***/ "./src/app/components/proyectos/proyectos.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/proyectos/proyectos.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/proyectos/proyectos.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/proyectos/proyectos.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div class=\"cotainer\">\r\n    <h3 style=\"text-align: center\">Aplicación Web PMO</h3>\r\n    <hr>\r\n\r\n    <P style=\"text-align: center\">Pantalla Inicial de la aplicación web, puede contener el logo de la compañía e información de la misma</P>\r\n    <br><br><br><br><br><br><br><br><br><br>\r\n    <hr>\r\n    <div class=\"text-center\" id=\"contenedor\">\r\n        <img src=\"/assets/img/LogoIS.ico\" class=\"rounded \" alt=\"... \" class=\"rounded-circle\">\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/proyectos/proyectos.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/proyectos/proyectos.component.ts ***!
  \*************************************************************/
/*! exports provided: ProyectosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProyectosComponent", function() { return ProyectosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProyectosComponent = /** @class */ (function () {
    function ProyectosComponent() {
    }
    ProyectosComponent.prototype.ngOnInit = function () {
    };
    ProyectosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-proyectos',
            template: __webpack_require__(/*! ./proyectos.component.html */ "./src/app/components/proyectos/proyectos.component.html"),
            styles: [__webpack_require__(/*! ./proyectos.component.css */ "./src/app/components/proyectos/proyectos.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProyectosComponent);
    return ProyectosComponent;
}());



/***/ }),

/***/ "./src/app/components/proyectos/upload-form/upload-form.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/proyectos/upload-form/upload-form.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/proyectos/upload-form/upload-form.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/proyectos/upload-form/upload-form.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nabvar-admin>\n\n</app-nabvar-admin>\n<br>\n<app-nav-proyectos></app-nav-proyectos>\n<br>\n<div class=\"card bg-light mb-3\" style=\"max-width: 80rem;\">\n    <div class=\"container\">\n        <form class=\"px-4 py-3\">\n            <form role=\"form\" id=\"register-form\" autocomplete=\"off\">\n                <div class=\"form-header\">\n                    <h3 style=\"text-align: center\" class=\"form-title\"><i class=\"fa fa-user\"></i> Formulario Nuevo proyecto\n                    </h3>\n                    <hr>\n                    <br>\n                </div>\n                <form>\n                    <div class=\"form-group was-validated\">\n                        <label for=\"codigo\">Código Proyecto<Span class=\"rojo\">*</Span></label>\n                        <input class=\"form-control\" type=\"text\" #input [value]=\"input.value.toUpperCase()\" placeholder=\"Código\" id=\"codigo\" name=\"codigo\" [(ngModel)]=\"proyecto.codigo\" minlength=\"3\" required #codigo=\"ngModel\">\n                        <div *ngIf=\"codigo?.errors?.required && (codigo.touched)\" class=\"invalid-feedback\">Este campo es requerido</div>\n                        <div *ngIf=\"codigo?.errors?.minlength && (codigo.touched)\" class=\"invalid-feedback\">Mínimo 3 caracteres\n                        </div>\n                    </div>\n                    <div class=\"form-group was-validated\">\n                        <label for=\"nombre\">Nombre Proyecto<Span class=\"rojo\">*</Span></label>\n                        <input class=\"form-control\" type=\"text\" #input1 [value]=\"input1.value.toUpperCase()\" placeholder=\"Nombre\" id=\"nombre\" name=\"nombre\" [(ngModel)]=\"proyecto.nombre\" minlength=\"3\" required #nombre=\"ngModel\">\n                        <div *ngIf=\"nombre?.errors?.required && (nombre.touched)\" class=\"invalid-feedback\">Este campo es requerido</div>\n                        <div *ngIf=\"nombre?.errors?.minlength\" class=\"invalid-feedback\">Mínimo 3 caracteres</div>\n                    </div>\n                    <div class=\"form-group was-validated\">\n                        <label for=\"descripcion\">Descripción<Span class=\"rojo\">*</Span></label>\n                        <textarea class=\"form-control\" #input2 [value]=\"input2.value.toUpperCase()\" placeholder=\"Descripción\" aria-label=\"With textarea\" id=\"descripcion\" name=\"descripcion\" [(ngModel)]=\"proyecto.descripcion\" minlength=\"2\" required required #descripcion=\"ngModel\"></textarea>\n                        <div *ngIf=\"descripcion?.errors?.required && (descripcion.touched)\" class=\"invalid-feedback\">Este campo es requerido</div>\n                        <div *ngIf=\"descripcion?.errors?.minlength\" class=\"invalid-feedback\">Mínimo 2 caracteres</div>\n                    </div>\n                    <div class=\"form-group was-validated\">\n                        <label for=\"cliente\">Cliente<Span class=\"rojo\">*</Span></label>\n                        <select class=\"form-control is-invalid\" id=\"cliente\" name=\"cliente\" [(ngModel)]=\"proyecto.cliente\" #cliente=\"ngModel\" required>\n                            <option selected>{{proyecto.cliente}}</option>\n                        </select>\n                        <div *ngIf=\"cliente?.errors?.required && (codigo.touched)\" class=\"invalid-feedback\">Debe seleccionar un cliente</div>\n                    </div>\n\n                    <br>\n                    <br>\n                    <form #formGuardarArchivo=\"ngForm\" (ngSubmit)=\"cargarArchivos(formGuardarArchivo)\">\n                        <div class=\"card\">\n                            <div class=\"card-header\">\n                                <h5 class=\"card-title\">Adjuntar Documentos</h5>\n                            </div>\n                            <div class=\"card-body\">\n                                <div class=\"row\">\n                                    <div class=\"col-10\">\n                                        <input type=\"file\" class=\"multiple\" (change)=\"selectFile($event)\" id=\"docuemento\" name=\"docuemento\" accept=\".pdf\">\n                                    </div>\n                                    <div class=\"col-2\">\n                                        <div class=\"col-4\">\n                                            <button type=\"button\" class=\"myButton\" (click)=\"limpiarArchivos()\">\n                                                limpiar</button>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"container\">\n                                <table class=\"table\">\n                                    <thead class=\"list-group-item-danger \">\n                                        <tr class=\"light bg-light\">\n                                            <th scope=\"col \">Nombre Archivo</th>\n                                            <th scope=\"col \">Tamaño</th>\n                                            <td></td>\n                                        </tr>\n                                    </thead>\n\n                                    <tbody>\n                                        <tr *ngFor=\"let archivo of archivos\">\n                                            <td>{{archivo.nombreAdjunto}}</td>\n                                            <td>{{archivo.adjunto.size / 1024 /1024 | number: '.2-2'}} MB</td>\n                                            <td>\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n\n                            </div>\n                        </div>\n                        <label for=\"email\" class=\"col-6 col-form-label\"><Span class=\"rojo\">*</Span>Campos\n                            Obligatorios</label>\n                        <hr>\n                        <div class=\"form-footer\">\n\n                            <button type=\"submit\" class=\" myButton btn-block\"> Guardar</button>\n                            <hr>\n                        </div>\n\n                    </form>\n                </form>\n\n            </form>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/proyectos/upload-form/upload-form.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/proyectos/upload-form/upload-form.component.ts ***!
  \***************************************************************************/
/*! exports provided: UploadFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFormComponent", function() { return UploadFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_proyecto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/proyecto.service */ "./src/app/services/proyecto.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_services_Cliente_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/Cliente.service */ "./src/app/services/Cliente.service.ts");
/* harmony import */ var _Models_file_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Models/file-item */ "./src/app/Models/file-item.ts");
/* harmony import */ var _services_preloader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/preloader.service */ "./src/app/services/preloader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UploadFormComponent = /** @class */ (function () {
    function UploadFormComponent(authService, router, route, proyectoService, ngFlashMensaje, clienteService, preloader) {
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.proyectoService = proyectoService;
        this.ngFlashMensaje = ngFlashMensaje;
        this.clienteService = clienteService;
        this.preloader = preloader;
        this.archivos = [];
        this.proyecto = {
            codigo: '',
            nombre: '',
            descripcion: '',
            cliente: '',
        };
    }
    UploadFormComponent.prototype.ngOnInit = function () {
        this.getInfoModCliente();
        this.todosClientes();
    };
    UploadFormComponent.prototype.todosClientes = function () {
        var _this = this;
        this.clienteService.getAllClientes().subscribe(function (clientes) { return _this.clientes = clientes; });
    };
    UploadFormComponent.prototype.getInfoModCliente = function () {
        var _this = this;
        this.codProyecto = this.route.snapshot.params['codigo'];
        var collection = this.proyectoService.getOneProyecto(this.codProyecto);
        collection.subscribe(function (docs) {
            _this.proyecto = docs[0];
        });
    };
    UploadFormComponent.prototype.selectFile = function (event) {
        var file = event.target.files[0];
        var nuevoArchivo = new _Models_file_item__WEBPACK_IMPORTED_MODULE_6__["FileItem"](file);
        this.archivos.push(nuevoArchivo);
        console.log(this.archivos);
    };
    UploadFormComponent.prototype.cargarArchivos = function () {
        this.proyectoService.cargarArchivosFirebase(this.archivos);
        this.router.navigate(['/listarProyectosAdmin']);
    };
    UploadFormComponent.prototype.limpiarArchivos = function () {
        this.archivos = [];
        console.log(this.archivos);
    };
    UploadFormComponent.prototype.onModificarProyecto = function (_a) {
        var _this = this;
        var value = _a.value;
        this.authService.getAuth().subscribe(function (user) {
            value.codigo = _this.codProyecto;
            _this.proyectoService.updateProyecto(value);
            _this.ngFlashMensaje.showFlashMessage({ messages: ['Proyecto Creado correctamente'],
                dismissible: true, timeout: 5000, type: 'success' });
            _this.router.navigate(['/listarProyecto']);
        });
    };
    UploadFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload-form',
            template: __webpack_require__(/*! ./upload-form.component.html */ "./src/app/components/proyectos/upload-form/upload-form.component.html"),
            styles: [__webpack_require__(/*! ./upload-form.component.css */ "./src/app/components/proyectos/upload-form/upload-form.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_proyecto_service__WEBPACK_IMPORTED_MODULE_3__["ProyectoService"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__["NgFlashMessageService"],
            src_app_services_Cliente_service__WEBPACK_IMPORTED_MODULE_5__["ClienteService"],
            _services_preloader_service__WEBPACK_IMPORTED_MODULE_7__["PreloaderService"]])
    ], UploadFormComponent);
    return UploadFormComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/nabvar-admin/nabvar-admin.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/components/shared/nabvar-admin/nabvar-admin.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/shared/nabvar-admin/nabvar-admin.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/shared/nabvar-admin/nabvar-admin.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light \">\n    <img src=\"/assets/img/LogoIS.ico\" class=\"rounded-circle\" width=\"30\" height=\"30\" alt=\"\">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n      </button>\n    <ul class=\"nav nav\">\n        <ul class=\"navbar-nav ml-auto \">\n            <li class=\"nav-item \" routerLinkActive=\"router-link-active \">\n                <a class=\"nav-link active \" [routerLink]=\"['/homeAdmin']\"><small><b>INICIO</b></small></a>\n            </li>\n        </ul>\n        <ul class=\"navbar-nav ml-auto \">\n            <li class=\"nav-item dropdown\" routerLinkActive=\"Active\">\n                <a class=\"nav-link dropdown-toggle\" href=\"#proyectosAdmin\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><small><b>PROYECTOS</b></small></a>\n                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                    <a class=\"dropdown-item\" [routerLink]=\"['/nuevoProyecto']\">NUEVO PROYECTO</a>\n                    <div class=\"dropdown-divider\"></div>\n                    <a class=\"dropdown-item\" [routerLink]=\"['/listarProyectosAdmin']\">LISTA\n                  PROYECTOS</a>\n                </div>\n            </li>\n        </ul>\n        <ul class=\"navbar-nav ml-auto \">\n            <li class=\"nav-item dropdown\" routerLinkActive=\"Active\">\n                <a class=\"nav-link dropdown-toggle\" href=\"#gestionClientesAdmin\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><small><b>GESTIÓN\n                            CLIENTES</b></small>\n                </a>\n                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                    <a class=\"dropdown-item\" [routerLink]=\"['/crearCliente']\">REGISTRO CLIENTES</a>\n                    <div class=\"dropdown-divider\"></div>\n                    <a class=\"dropdown-item\" [routerLink]=\"['/listarCliente']\">LISTA CLIENTES</a>\n                </div>\n            </li>\n        </ul>\n        <ul class=\"navbar-nav ml-auto \">\n            <li class=\"nav-item dropdown\" routerLinkActive=\"Active\">\n                <a class=\"nav-link dropdown-toggle\" href=\"#controlAccesoAdmin\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><small><b>CONTROL\n                            ACCESO</b></small>\n                </a>\n                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                    <a class=\"dropdown-item\" [routerLink]=\"['/registar']\">REGISTRO USUARIOS</a>\n                    <div class=\"dropdown-divider\"></div>\n                    <a class=\"dropdown-item\" [routerLink]=\"['/listar']\">LISTA USUARIOS</a>\n                </div>\n            </li>\n        </ul>\n        <ul class=\"navbar-nav ml-auto \"></ul>\n        <form class=\"form-inline my-2 my-lg-0 \">\n\n            <input class=\"form-control mr-sm-2 \" type=\"text \" placeholder=\"Buscar Proyecto \" #buscarTexto (keyup.enter)=\"buscarProyecto(buscarTexto) \">\n            <button (click)=\"buscarProyecto(buscarTexto.value) \" class=\"myButton \" type=\"button\">\n              <span class=\"glyphicon glyphicon-search \"></span> Buscar\n          </button>\n        </form>\n    </ul>\n    <ul class=\"navbar-nav ml-auto \">\n        <li class=\"navi-tem \">\n            <span class=\"nav-link \">{{userEmail}}</span>\n        </li>\n        <!--<li class=\"nav-item \" routerLinkActive=\"Active \">\n            <a class=\"nav-link \" [routerLink]=\"[ '/perfilAdmin'] \"><small><b>PERFIL</b></small></a>\n        </li> -->\n        <li class=\"nav-item \" routerLinkActive=\"Active \">\n            <a class=\"nav-link \" [routerLink]=\"[ '/home'] \" (click)=\"onLogout()\"><small><b>SALIR</b></small></a>\n        </li>\n    </ul>\n</nav>"

/***/ }),

/***/ "./src/app/components/shared/nabvar-admin/nabvar-admin.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/shared/nabvar-admin/nabvar-admin.component.ts ***!
  \**************************************************************************/
/*! exports provided: NabvarAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NabvarAdminComponent", function() { return NabvarAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NabvarAdminComponent = /** @class */ (function () {
    function NabvarAdminComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    NabvarAdminComponent.prototype.ngOnInit = function () {
        this.onComprobarUserLogin();
    };
    NabvarAdminComponent.prototype.onComprobarUserLogin = function () {
        var _this = this;
        this.auth.getAuth().subscribe(function (auth) {
            if (auth) {
                _this.isLogin = true;
                _this.userNombre = auth.displayName,
                    _this.userEmail = auth.email;
                _this.userId = auth.uid;
            }
            else {
                _this.isLogin = false;
            }
        });
    };
    NabvarAdminComponent.prototype.onLogout = function () {
        this.auth.logout();
    };
    NabvarAdminComponent.prototype.buscarProyecto = function (termino) {
        this.router.navigate(['/buscadorAdmin', termino.toUpperCase()]);
    };
    NabvarAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nabvar-admin',
            template: __webpack_require__(/*! ./nabvar-admin.component.html */ "./src/app/components/shared/nabvar-admin/nabvar-admin.component.html"),
            styles: [__webpack_require__(/*! ./nabvar-admin.component.css */ "./src/app/components/shared/nabvar-admin/nabvar-admin.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NabvarAdminComponent);
    return NabvarAdminComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/nabvar-consult/nabvar-consult.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/shared/nabvar-consult/nabvar-consult.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/shared/nabvar-consult/nabvar-consult.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/shared/nabvar-consult/nabvar-consult.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light \">\n    <img src=\"/assets/img/LogoIS.ico\" class=\"rounded-circle\" width=\"30\" height=\"30\" alt=\"\">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n    <ul class=\"nav nav\">\n        <ul class=\"navbar-nav ml-auto \">\n            <li class=\"nav-item \" routerLinkActive=\"router-link-active \">\n                <a class=\"nav-link active \" [routerLink]=\"['/homeConsult']\"><small><b>INICIO</b></small></a>\n            </li>\n        </ul>\n        <ul class=\"navbar-nav ml-auto \">\n            <li class=\"nav-item dropdown\" routerLinkActive=\"Active\">\n                <a class=\"nav-link dropdown-toggle\" href=\"#proyectosConsult\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><small><b>PROYECTOS</b></small></a>\n                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                    <a class=\"dropdown-item\" [routerLink]=\"['/listarProyectosConsult']\">LISTA\n                            PROYECTOS</a>\n                </div>\n            </li>\n        </ul>\n        <ul class=\"navbar-nav ml-auto \"></ul>\n        <form class=\"form-inline my-2 my-lg-0 \">\n\n            <input class=\"form-control mr-sm-2 \" type=\"text \" placeholder=\"Buscar Proyecto \" #buscarTexto (keyup.enter)=\"buscarProyecto(buscarTexto.value) \">\n            <button (click)=\"buscarProyecto(buscarTexto.value) \" class=\"myButton \" type=\"button\">\n                    <span class=\"glyphicon glyphicon-search \"></span> Buscar\n                </button>\n        </form>\n    </ul>\n    <ul class=\"navbar-nav ml-auto \">\n        <li class=\"navi-tem \">\n            <span class=\"nav-link \">{{userEmail}}</span>\n        </li>\n        <!--<li class=\"nav-item \" routerLinkActive=\"Active \">\n            <a class=\"nav-link \" [routerLink]=\"[ '/perfilConsult'] \"><small><b>PERFIL</b></small></a>\n        </li>-->\n        <li class=\"nav-item \" routerLinkActive=\"Active \">\n            <a class=\"nav-link \" [routerLink]=\"[ '/home'] \" (click)=\"onLogout()\"><small><b>SALIR</b></small></a>\n        </li>\n    </ul>\n</nav>"

/***/ }),

/***/ "./src/app/components/shared/nabvar-consult/nabvar-consult.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/shared/nabvar-consult/nabvar-consult.component.ts ***!
  \******************************************************************************/
/*! exports provided: NabvarConsultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NabvarConsultComponent", function() { return NabvarConsultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NabvarConsultComponent = /** @class */ (function () {
    function NabvarConsultComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    NabvarConsultComponent.prototype.ngOnInit = function () {
        this.onComprobarUserLogin();
    };
    NabvarConsultComponent.prototype.onComprobarUserLogin = function () {
        var _this = this;
        this.auth.getAuth().subscribe(function (auth) {
            if (auth) {
                _this.isLogin = true;
                _this.userNombre = auth.displayName,
                    _this.userEmail = auth.email;
                _this.userId = auth.uid;
            }
            else {
                _this.isLogin = false;
            }
        });
    };
    NabvarConsultComponent.prototype.onLogout = function () {
        this.auth.logout();
    };
    NabvarConsultComponent.prototype.buscarProyecto = function (termino) {
        this.router.navigate(['/buscadorConsult', termino.toUpperCase()]);
    };
    NabvarConsultComponent.prototype.filter = function (event) {
        event = this.router.navigate(['/listarProyectosConsult']);
    };
    NabvarConsultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nabvar-consult',
            template: __webpack_require__(/*! ./nabvar-consult.component.html */ "./src/app/components/shared/nabvar-consult/nabvar-consult.component.html"),
            styles: [__webpack_require__(/*! ./nabvar-consult.component.css */ "./src/app/components/shared/nabvar-consult/nabvar-consult.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NabvarConsultComponent);
    return NabvarConsultComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/navbar/login/login.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/shared/navbar/login/login.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/shared/navbar/login/login.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/shared/navbar/login/login.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<br>\r\n\r\n<div class=\"card bg-light mb-3 dflex justify-content-around mx-auto\" style=\"max-width: 25rem;\">\r\n    <div class=\"container\">\r\n        <form (submit)=\"onSubmitLogin()\" class=\"px-4 py-3\">\r\n            <h3 style=\"text-align: center\" class=\"form-title\"><i class=\"fa fa-user\"></i> Login</h3>\r\n            <hr>\r\n            <div class=\"form-group\">\r\n                <label for=\"exampleDropdownFormEmail1\">E-mail</label>\r\n                <input #input [value]=\"input.value.toUpperCase()\" type=\"email\" class=\"form-control\" name=\"email \" id=\"email\" [(ngModel)]=\"email\" placeholder=\"email@implementalsystems.com\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"exampleDropdownFormPassword1\">Password</label>\r\n                <input type=\"password\" class=\"form-control\" name=\"password\" id=\"password\" [(ngModel)]=\"password\" placeholder=\"Password\">\r\n            </div>\r\n            <hr>\r\n            <button class=\"submit\" class=\"myButton btn-block\" data-toggle=\"modal\" data-target=\"#miModal\">Acceder</button>\r\n            <hr>\r\n            <!--<button class=\"btn btn-lg btn-google  btn-block\" (click)=onClicklGoogleLogin()><i class=\"fa fa-google-plus\"></i>Google</button>\r\n            <hr>-->\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/shared/navbar/login/login.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/shared/navbar/login/login.component.ts ***!
  \*******************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/login.service */ "./src/app/services/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, ngFlashMensaje, loginService) {
        this.authService = authService;
        this.router = router;
        this.ngFlashMensaje = ngFlashMensaje;
        this.loginService = loginService;
        this.user = {
            nombres: '',
            apellidos: '',
            email: '',
            password: '',
            role: '',
            estado: '',
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmitLogin = function () {
        var _this = this;
        this.loginService.loginEmail(this.email, this.password)
            .then(function (res) {
            console.log(_this.email, _this.password);
            _this.loginService.comprobar(_this.email);
            _this.ngFlashMensaje.showFlashMessage({ messages: ['El usuario inició sesión correctamente'],
                dismissible: true, timeout: 5000, type: 'success' });
        }).catch(function (err) {
            _this.ngFlashMensaje.showFlashMessage({ messages: [err],
                dismissible: true, timeout: 5000, type: 'danger' });
            _this.router.navigate(['/login']);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/shared/navbar/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/shared/navbar/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"],
            _services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <nav class=\"navbar navbar-expand-lg navbar-light bg-light\" *ngIf=\"!isLogin\">\r\n        <img src=\"/assets/img/LogoIS.ico\" class=\"rounded-circle\" width=\"30\" height=\"30\" alt=\"\">\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n        <ul class=\"navbar-nav mr-auto\">\r\n            <form class=\"collapse navbar-collapse\">\r\n                <li class=\"nav-item \" routerLinkActive=\"router-link-active \">\r\n                    <a class=\"nav-link active \" [routerLink]=\"[ 'home']\" *ngIf=\" !isLogin \"><small><b>INICIO</b></small></a>\r\n                </li>\r\n\r\n            </form>\r\n        </ul>\r\n\r\n        <ul class=\"navbar-nav ml-auto \">\r\n\r\n            <ul class=\"navbar-nav ml-auto \"></ul>\r\n            <li class=\"nav-item \" routerLinkActive=\"Active \" *ngIf=\"!isLogin \">\r\n                <a class=\"nav-link \" [routerLink]=\"[ 'login'] \"><small><b>LOGIN</b></small></a>\r\n            </li>\r\n        </ul>\r\n        <!--\r\n    <ul class=\"navbar-nav ml-auto \">\r\n        <li class=\"nav-item \" routerLinkActive=\"Active \" *ngIf=\"!isLogin \">\r\n            <a class=\"nav-link \" [routerLink]=\"[ 'login'] \"><small><b>LOGIN</b></small></a>\r\n        </li>\r\n        <li class=\"navi-tem \" *ngIf=\"isLogin \">\r\n            <img src=\"{{userPicture}} \" class=\"rounded-circle \" width=\"30px \" height=\"20px \">\r\n        </li>\r\n        <li class=\"navi-tem \" *ngIf=\"isLogin \">\r\n            <span class=\"nav-link \">{{userNombre}}</span>\r\n        </li>\r\n        <li class=\"nav-item \">\r\n            <a class=\"nav-link \" href=\"#home \" (click)=\"onLogout() \"><small><b>SALIR</b></small></a>\r\n        </li>\r\n    </ul>-->\r\n    </nav>\r\n</div>"

/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/login.service */ "./src/app/services/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(auth, router, afs, login) {
        this.auth = auth;
        this.router = router;
        this.afs = afs;
        this.login = login;
        this.userRol = 'admin';
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.onComprobarUserLogin();
    };
    NavbarComponent.prototype.onComprobarUserLogin = function () {
        var _this = this;
        this.auth.getAuth().subscribe(function (auth) {
            if (auth) {
                _this.isLogin = true;
                _this.userNombre = auth.displayName,
                    _this.userEmail = auth.email;
                _this.userId = auth.uid;
            }
            else {
                _this.isLogin = false;
            }
        });
    };
    NavbarComponent.prototype.onLogout = function () {
        this.auth.logout();
    };
    NavbarComponent.prototype.buscarProyecto = function (termino) {
        this.router.navigate(['/buscador', termino]);
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/shared/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
            _services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_take__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/take */ "./node_modules/rxjs-compat/_esm5/add/operator/take.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.authService.afAuth.authState
            .take(1)
            .map(function (authState) { return !!authState; })
            .do(function (logado) {
            if (!logado) {
                _this.router.navigate(['/login']);
            }
        });
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/Cliente.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/Cliente.service.ts ***!
  \*********************************************/
/*! exports provided: ClienteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteService", function() { return ClienteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClienteService = /** @class */ (function () {
    function ClienteService(afs) {
        this.afs = afs;
        this.clienteColletion = this.afs.collection('clientes', function (ref) { return ref; });
    }
    ClienteService.prototype.addNewCliente = function (cliente) {
        this.clienteColletion.add(cliente);
    };
    ClienteService.prototype.getAllClientes = function () {
        this.clientes = this.clienteColletion.snapshotChanges()
            .map(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                // data.codigo = action.payload.doc.id;
                return data;
            });
        });
        return this.clientes;
    };
    ClienteService.prototype.getOneCliente = function (codCliente) {
        var collection = this.afs.collection('clientes', function (ref) { return ref.where('codigo', '==', codCliente); }).snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                return data;
            });
        });
        return collection;
    };
    ClienteService.prototype.getOneClienteofProyecto = function (clientProyecto) {
        var collection = this.afs.collection('clientes', function (ref) { return ref.where('codigo', '==', clientProyecto); }).snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                return data;
            });
        });
        return collection;
    };
    ClienteService.prototype.updateCliente = function (cliente) {
        var _this = this;
        this.afs.collection('clientes', function (ref) { return ref.where('codigo', '==', cliente.codigo); }).snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        }).subscribe(function (items) {
            items.forEach(function (client) {
                _this.afs.doc("clientes/" + client.id).update({
                    descripcion: cliente.descripcion,
                    region: cliente.region,
                    pais: cliente.pais,
                    mercado: cliente.mercado,
                    Ncontacto: cliente.Ncontacto,
                    Econtacto: cliente.Econtacto
                });
            });
        });
    };
    ClienteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], ClienteService);
    return ClienteService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs-compat/_esm5/add/operator/switchMap.js");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm5/add/observable/of.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthService = /** @class */ (function () {
    function AuthService(afAuth, router, afs) {
        var _this = this;
        this.afAuth = afAuth;
        this.router = router;
        this.afs = afs;
        this.usersColletion = this.afs.collection('users', function (ref) { return ref; });
        this.user = this.afAuth.authState.switchMap(function (user) {
            if (user) {
                return _this.afs.doc("users/" + user.uid).valueChanges();
            }
            else {
                return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].of(null);
            }
        });
    }
    AuthService.prototype.addNewUser = function (user) {
        var _this = this;
        this.id = this.afs.createId();
        console.log(this.id);
        this.usersColletion.doc(this.id).set(user);
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
                .then(function (userData) { return resolve(userData); }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.emailAndPassword = function (email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email.value, password.value);
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        return this.afAuth.auth.signOut().then(function () {
            _this.router.navigate(['/login']);
        });
    };
    AuthService.prototype.getAuth = function () {
        return this.afAuth.authState.map(function (auth) { return auth; });
    };
    AuthService.prototype.getAllUsers = function () {
        this.userss = this.usersColletion.snapshotChanges()
            .map(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                // data.codigo = action.payload.doc.id;
                return data;
            });
        });
        return this.userss;
    };
    AuthService.prototype.getOneUser = function (emailUser) {
        var collection = this.afs.collection('users', function (ref) { return ref.where('email', '==', emailUser); }).snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                return data;
            });
        });
        return collection;
    };
    AuthService.prototype.updateUser = function (usuario) {
        var _this = this;
        this.afs.collection('users', function (ref) { return ref.where('email', '==', usuario.email); }).snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        }).subscribe(function (items) {
            items.forEach(function (user) {
                _this.afs.doc("users/" + user.id).update({
                    email: usuario.email,
                    role: usuario.role,
                    estado: usuario.estado
                });
            });
        });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _preloader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./preloader.service */ "./src/app/services/preloader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginService = /** @class */ (function () {
    function LoginService(afAuth, authService, router, preloader) {
        this.afAuth = afAuth;
        this.authService = authService;
        this.router = router;
        this.preloader = preloader;
        this.user = {
            nombres: '',
            apellidos: '',
            email: '',
            password: '',
            role: '',
            estado: '',
        };
    }
    LoginService.prototype.loginEmail = function (email, pass) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.signInWithEmailAndPassword(email, pass)
                .then(function (userData) { return resolve(userData); }, function (err) { return reject(err); });
        });
    };
    LoginService.prototype.comprobar = function (email) {
        var _this = this;
        this.emailUser = email;
        var collection = this.authService.getOneUser(this.emailUser);
        collection.subscribe(function (docs) {
            _this.user = docs[0];
            console.log(_this.user);
            if (_this.user.role === 'ADMIN') {
                _this.router.navigate(['/admin']);
                _this.isAdmin = true;
                console.log(_this.isAdmin);
            }
            else if (_this.user.role === 'CONSULT') {
                _this.router.navigate(['/consult']);
                _this.isAdmin = false;
            }
        });
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"],
            _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _preloader_service__WEBPACK_IMPORTED_MODULE_4__["PreloaderService"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/preloader.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/preloader.service.ts ***!
  \***********************************************/
/*! exports provided: PreloaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreloaderService", function() { return PreloaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PreloaderService = /** @class */ (function () {
    function PreloaderService() {
        this.loadings = rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].of(false);
    }
    PreloaderService.prototype.fireLoader = function () {
        this.loadings = rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].of(true);
    };
    PreloaderService.prototype.stopLoader = function () {
        this.loadings = rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].of(false);
    };
    PreloaderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], PreloaderService);
    return PreloaderService;
}());



/***/ }),

/***/ "./src/app/services/proyecto.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/proyecto.service.ts ***!
  \**********************************************/
/*! exports provided: ProyectoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProyectoService", function() { return ProyectoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _preloader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./preloader.service */ "./src/app/services/preloader.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProyectoService = /** @class */ (function () {
    function ProyectoService(afs, preloader, ngFlashMensaje) {
        this.afs = afs;
        this.preloader = preloader;
        this.ngFlashMensaje = ngFlashMensaje;
        this.basePath = 'adjuntos';
        this.proyectoColletion = this.afs.collection('proyectos', function (ref) { return ref; });
    }
    ProyectoService.prototype.addNewProyecto = function (proyecto) {
        this.id = this.afs.createId();
        console.log(this.id);
        this.proyectoColletion.doc(this.id).set(proyecto);
    };
    ProyectoService.prototype.getOneProyecto = function (codProyecto) {
        var collection = this.afs.collection('proyectos', function (ref) { return ref.where('codigo', '==', codProyecto); }).snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                return data;
            });
        });
        return collection;
    };
    ProyectoService.prototype.getAllProyectos = function () {
        this.proyectos = this.proyectoColletion.snapshotChanges()
            .map(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                // data.codigo = action.payload.doc.id;
                return data;
            });
        });
        return this.proyectos;
    };
    ProyectoService.prototype.updateProyecto = function (proyecto) {
        var _this = this;
        this.afs.collection('proyectos', function (ref) { return ref.where('codigo', '==', proyecto.codigo); }).snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        }).subscribe(function (items) {
            items.forEach(function (proyect) {
                _this.afs.doc("proyectos/" + proyect.id).update({
                    codigo: proyecto.codigo,
                    nombre: proyecto.nombre,
                    descripcion: proyecto.descripcion,
                    cliente: proyecto.cliente,
                    adjuntos: proyecto.adjuntoUrl,
                });
            });
        });
    };
    ProyectoService.prototype.addNewArchivo = function (archivo) {
        var docRef = this.proyectoColletion.doc(this.id).ref;
        this.proyectoColletion.doc(this.id).ref.firestore.runTransaction(function (t) {
            return t.get(docRef).then(function (doc) {
                // doc doesn't exist; can't update
                if (!doc.exists) {
                    console.log('Documento no existe');
                    return;
                }
                // update the users array after getting it from Firestore.
                var newURL = doc.get('adjuntoUrl');
                newURL.push(archivo);
                console.log('esto es lo que tiene el objeto archivo', archivo);
                t.set(docRef, { adjuntoUrl: newURL }, { merge: true });
            });
        });
    };
    ProyectoService.prototype.cargarArchivosFirebase = function (archivos) {
        var _this = this;
        var storageRef = firebase_app__WEBPACK_IMPORTED_MODULE_2__["storage"]().ref();
        var _loop_1 = function (item) {
            if (item.progreso >= 100) {
                return "continue";
            }
            storageRef.child("" + this_1.basePath + item.nombreAdjunto)
                .put(item.adjunto)
                .then(function (snapshot) {
                _this.preloader.fireLoader();
                return snapshot.ref.getDownloadURL(); // Will return a promise with the download link
            }).then(function (downloadURL) {
                // console.log(`Successfully uploaded file and got download link - ${downloadURL} /${ item.nombreAdjunto}`);
                _this.ngFlashMensaje.showFlashMessage({ messages: ['Proyecto Creado correctamente'],
                    dismissible: true, timeout: 5000, type: 'success' });
                _this.preloader.stopLoader();
                var PDFFileUrl = downloadURL;
                var nombre1 = item.nombreAdjunto;
                _this.archivo = { nombre: nombre1, url: PDFFileUrl };
                // this.adjuntouRL.push(PDFFileUrl);
                _this.addNewArchivo(_this.archivo);
            })
                .catch(function (error) {
                // Use to signal error if something goes wrong.
                console.log("Failed to upload file and get link - " + error);
            });
        };
        var this_1 = this;
        for (var _i = 0, archivos_1 = archivos; _i < archivos_1.length; _i++) {
            var item = archivos_1[_i];
            _loop_1(item);
        }
    };
    ProyectoService.prototype.buscarOneproyectos = function (termino) {
        var collBusqueda = this.afs.collection('proyectos', function (ref) { return ref.where('codigo', '==', termino); }).snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                return data;
            });
        });
        return collBusqueda;
    };
    ProyectoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"],
            _preloader_service__WEBPACK_IMPORTED_MODULE_3__["PreloaderService"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__["NgFlashMessageService"]])
    ], ProyectoService);
    return ProyectoService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyBE32Cipzqg16gSGy5QdJxtgVmo3Tur6fg',
        authDomain: 'appwebpmo.firebaseapp.com',
        databaseURL: 'https://appwebpmo.firebaseio.com',
        projectId: 'appwebpmo',
        storageBucket: 'appwebpmo.appspot.com',
        messagingSenderId: '1057410634859'
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\amunoz\Desktop\App-Web-PMO\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map