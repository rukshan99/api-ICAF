import http from "../service/hhtp-common";

class Service {
  getConAll() {
    return http.get("/api/v1/admin/");
  }

  getPresAll() {
    return http.get("/api/v1/admin/presentation/all/");
  }

  getWorkAll() {
    return http.get("/api/v1/admin/workshop/all/");
  }
  
  getCon(id) {
    return http.get(`/api/v1/admin/${id}`);
  }

  getApp(id) {
    return http.get(`/api/v1/admin/${id}`);
  }

  update(id, data) {
    return http.put(`/api/v1/admin/${id}`, data);
  }

  getAprroved() {
    return http.get(`/api/v1/admin/approved/one`);
  }

}

export default new Service();