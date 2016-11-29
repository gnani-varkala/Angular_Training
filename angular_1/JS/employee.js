var app = angular.module("first_angular_app",[]);

app.controller('employeeCtrl',function($scope){
  var employees = [
      {
        "ID": "30024",
        "Name": "NagaLatha",
        "Designation": "Trainee",
        "Experience": "20Days",
        "Salary": 20000
      },
	  {
		"ID": "30026",
		"Name": "Gnaneshwari",
		"Designation": "Trainee",
		"Experience": "20Days",
		"Salary": 20000
	},
      {
        "ID": "30025",
        "Name": "Santoshi",
        "Designation": "Trainee",
        "Experience": "20Days",
        "Salary": 20000
      }
    ];
    $scope.employees = employees;
});
