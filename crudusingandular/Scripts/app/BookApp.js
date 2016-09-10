'use strict';
angular.module("BookEntry",[])
.controller("BookCntrl", ["$http", "$scope", function ($http, $scope) {

    $scope.List = [];
    $scope.Selected;
    $scope.NewObj = {
       ID:
        0, Title :
        "", Author :
        "", publisher :
        "", Isbn :""
    }

    $scope.EditVisible = false;
    $scope.AddVissible = false;

    $scope.Delete = function (id) {
        Delete(id)
       
       
    }

    function GetAll() {
        $http.get("/api/books/")
        .success(function (data) {
            $scope.List = data;
        })
    }

    $scope.Save = function(){
        $http.post("/api/books/", $scope.NewObj).success(function (data) {
            GetAll();
            alert("data Added");
            $scope.AddVissible = false;
        })
    }

    $scope.SaveChanges = function () {
        $http.put("/api/books/", $scope.Selected).success(function (data) {
            GetAll();
            alert("data Added");
            $scope.EditVisible = false;
        })
    }

    $scope.Edit = function (Obj) {
        $scope.Selected = Obj;
        $scope.EditVisible = true;
        $scope.AddVissible = false;
    }

    $scope.EditHide = function () {
        $scope.EditVisible = false;
    }

    $scope.Add = function () {
        $scope.NewObj = {
            ID:
             0, Title:
             "", Author:
             "", publisher:
             "", Isbn: ""
        };
        $scope.AddVissible = true;
        $scope.EditVisible = false;
    }

    $scope.AddHide = function () {
        $scope.AddVissible = false;
    }

    function Delete(id) {
        $http.delete("/api/books/" + id).success(function (data) {
            GetAll();
            alert("data Deleted");
        })
    }

    GetAll()
}])