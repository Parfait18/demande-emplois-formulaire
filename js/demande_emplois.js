/****/

    $(document).ready(function () {
  
       
    });
    function BirthCityOnChange() {
        var val1 = $("#BirthCountry").val();
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "DataEntry.aspx/PopulateDropDownList",
            data: "{'Country':'" + val1 + "'}",
            dataType: "json",
            //called on jquery ajax call success
            success: function (data) {
                var data = data.d;
                var htm = "";

                if (data.length > 0) {
                    htm = "<option value='0' selected='selected'>Select City</option>";
                    for (var i = 0; i < data.length; i++) {
                        htm += "<option value='" + data[i].CityID + "' >" + data[i].CityName + "</option>";
                    }
                }
                else {
                    htm = "<option value='-' selected='selected'>-</option>";
                }

                $("[id$='BirthCity']").html(htm);
            }
            //});
        });
    }
    /***/

function loadform1() {
    var p1 = document.getElementById("part1");
    var p2 = document.getElementById("part2");
    var p3 = document.getElementById("part3");
    var p4 = document.getElementById("part4");
    var p5 = document.getElementById("part5");
    var p6 = document.getElementById("part6");
    var p7 = document.getElementById("part7");
    var p8 = document.getElementById("part8");
    var p9 = document.getElementById("part9");
    var p10 = document.getElementById("part10");
    var p11 = document.getElementById("part11");
    var p12 = document.getElementById("part12");
    var p13 = document.getElementById("part13");
    var p14 = document.getElementById("part14");
    p1.style.display = "block";
    p2.style.display = "none";
    p3.style.display = "none";
    p4.style.display = "none";
    p5.style.display = "none";
    p6.style.display = "none";
    p7.style.display = "none";
    p8.style.display = "none";
    p9.style.display = "none";
    p10.style.display = "none";
    p11.style.display = "none";
    p12.style.display = "none";
    p13.style.display = "none";
    p14.style.display = "none";
}
/***/
  
function loadform2() {
   var p1 = document.getElementById("part1");
   var p2 = document.getElementById("part2");
   var p3 = document.getElementById("part3");
   var p4 = document.getElementById("part4");
   var p5 = document.getElementById("part5");
   var p6 = document.getElementById("part6");
   var p7 = document.getElementById("part7");
   var p8 = document.getElementById("part8");
   var p9 = document.getElementById("part9");
   var p10 = document.getElementById("part10");
   var p11 = document.getElementById("part11");
   var p12 = document.getElementById("part12");
   var p13 = document.getElementById("part13");
   var p14 = document.getElementById("part14");
   p1.style.display = "none";
   p2.style.display = "block";
   p3.style.display = "none";
   p4.style.display = "none";
   p5.style.display = "none";
   p6.style.display = "none";
   p7.style.display = "none";
   p8.style.display = "none";
   p9.style.display = "none";
   p10.style.display = "none";
   p11.style.display = "none";
   p12.style.display = "none";
   p13.style.display = "none";
   p14.style.display = "none";
}
/***/
/***/
function loadform3() {
   var p1 = document.getElementById("part1");
   var p2 = document.getElementById("part2");
   var p3 = document.getElementById("part3");
   var p4 = document.getElementById("part4");
   var p5 = document.getElementById("part5");
   var p6 = document.getElementById("part6");
   var p7 = document.getElementById("part7");
   var p8 = document.getElementById("part8");
   var p9 = document.getElementById("part9");
   var p10 = document.getElementById("part10");
   var p11 = document.getElementById("part11");
   var p12 = document.getElementById("part12");
   var p13 = document.getElementById("part13");
   var p14 = document.getElementById("part14");
   p1.style.display = "none";
   p2.style.display = "none";
   p3.style.display = "block";
   p4.style.display = "none";
   p5.style.display = "none";
   p6.style.display = "none";
   p7.style.display = "none";
   p8.style.display = "none";
   p9.style.display = "none";
   p10.style.display = "none";
   p11.style.display = "none";
   p12.style.display = "none";
   p13.style.display = "none";
   p14.style.display = "none";
}
/***/
/***/
function loadform4() {
   var p1 = document.getElementById("part1");
   var p2 = document.getElementById("part2");
   var p3 = document.getElementById("part3");
   var p4 = document.getElementById("part4");
   var p5 = document.getElementById("part5");
   var p6 = document.getElementById("part6");
   var p7 = document.getElementById("part7");
   var p8 = document.getElementById("part8");
   var p9 = document.getElementById("part9");
   var p10 = document.getElementById("part10");
   var p11 = document.getElementById("part11");
   var p12 = document.getElementById("part12");
   var p13 = document.getElementById("part13");
   var p14 = document.getElementById("part14");
   p1.style.display = "none";
   p2.style.display = "none";
   p3.style.display = "none";
   p4.style.display = "block";
   p5.style.display = "none";
   p6.style.display = "none";
   p7.style.display = "none";
   p8.style.display = "none";
   p9.style.display = "none";
   p10.style.display = "none";
   p11.style.display = "none";
   p12.style.display = "none";
   p13.style.display = "none";
   p14.style.display = "none";
}
/***/
/***/
function loadform5() {
   var p1 = document.getElementById("part1");
   var p2 = document.getElementById("part2");
   var p3 = document.getElementById("part3");
   var p4 = document.getElementById("part4");
   var p5 = document.getElementById("part5");
   var p6 = document.getElementById("part6");
   var p7 = document.getElementById("part7");
   var p8 = document.getElementById("part8");
   var p9 = document.getElementById("part9");
   var p10 = document.getElementById("part10");
   var p11 = document.getElementById("part11");
   var p12 = document.getElementById("part12");
   var p13 = document.getElementById("part13");
   var p14 = document.getElementById("part14");
   p1.style.display = "none";
   p2.style.display = "none";
   p3.style.display = "none";
   p4.style.display = "none";
   p5.style.display = "block";
   p6.style.display = "none";
   p7.style.display = "none";
   p8.style.display = "none";
   p9.style.display = "none";
   p10.style.display = "none";
   p11.style.display = "none";
   p12.style.display = "none";
   p13.style.display = "none";
   p14.style.display = "none";
}
/***/
/***/
function loadform6() {
   var p1 = document.getElementById("part1");
   var p2 = document.getElementById("part2");
   var p3 = document.getElementById("part3");
   var p4 = document.getElementById("part4");
   var p5 = document.getElementById("part5");
   var p6 = document.getElementById("part6");
   var p7 = document.getElementById("part7");
   var p8 = document.getElementById("part8");
   var p9 = document.getElementById("part9");
   var p10 = document.getElementById("part10");
   var p11 = document.getElementById("part11");
   var p12 = document.getElementById("part12");
   var p13 = document.getElementById("part13");
   var p14 = document.getElementById("part14");
   p1.style.display = "none";
   p2.style.display = "none";
   p3.style.display = "none";
   p4.style.display = "none";
   p5.style.display = "none";
   p6.style.display = "block";
   p7.style.display = "none";
   p8.style.display = "none";
   p9.style.display = "none";
   p10.style.display = "none";
   p11.style.display = "none";
   p12.style.display = "none";
   p13.style.display = "none";
   p14.style.display = "none";
}
/***/
/***/
function loadform7() {
   var p1 = document.getElementById("part1");
   var p2 = document.getElementById("part2");
   var p3 = document.getElementById("part3");
   var p4 = document.getElementById("part4");
   var p5 = document.getElementById("part5");
   var p6 = document.getElementById("part6");
   var p7 = document.getElementById("part7");
   var p8 = document.getElementById("part8");
   var p9 = document.getElementById("part9");
   var p10 = document.getElementById("part10");
   var p11 = document.getElementById("part11");
   var p12 = document.getElementById("part12");
   var p13 = document.getElementById("part13");
   var p14 = document.getElementById("part14");
   p1.style.display = "none";
   p2.style.display = "none";
   p3.style.display = "none";
   p4.style.display = "none";
   p5.style.display = "none";
   p6.style.display = "none";
   p7.style.display = "block";
   p8.style.display = "none";
   p9.style.display = "none";
   p10.style.display = "none";
   p11.style.display = "none";
   p12.style.display = "none";
   p13.style.display = "none";
   p14.style.display = "none";
}
/***/
/***/
function loadform8() {
   var p1 = document.getElementById("part1");
   var p2 = document.getElementById("part2");
   var p3 = document.getElementById("part3");
   var p4 = document.getElementById("part4");
   var p5 = document.getElementById("part5");
   var p6 = document.getElementById("part6");
   var p7 = document.getElementById("part7");
   var p8 = document.getElementById("part8");
   var p9 = document.getElementById("part9");
   var p10 = document.getElementById("part10");
   var p11 = document.getElementById("part11");
   var p12 = document.getElementById("part12");
   var p13 = document.getElementById("part13");
   var p14 = document.getElementById("part14");
   p1.style.display = "none";
   p2.style.display = "none";
   p3.style.display = "none";
   p4.style.display = "none";
   p5.style.display = "none";
   p6.style.display = "none";
   p7.style.display = "none";
   p8.style.display = "block";
   p9.style.display = "none";
   p10.style.display = "none";
   p11.style.display = "none";
   p12.style.display = "none";
   p13.style.display = "none";
   p14.style.display = "none";
}
/***/
/***/
function loadform9() {
   var p1 = document.getElementById("part1");
   var p2 = document.getElementById("part2");
   var p3 = document.getElementById("part3");
   var p4 = document.getElementById("part4");
   var p5 = document.getElementById("part5");
   var p6 = document.getElementById("part6");
   var p7 = document.getElementById("part7");
   var p8 = document.getElementById("part8");
   var p9 = document.getElementById("part9");
   var p10 = document.getElementById("part10");
   var p11 = document.getElementById("part11");
   var p12 = document.getElementById("part12");
   var p13 = document.getElementById("part13");
   var p14 = document.getElementById("part14");
   p1.style.display = "none";
   p2.style.display = "none";
   p3.style.display = "none";
   p4.style.display = "none";
   p5.style.display = "none";
   p6.style.display = "none";
   p7.style.display = "none";
   p8.style.display = "none";
   p9.style.display = "block";
   p10.style.display = "none";
   p11.style.display = "none";
   p12.style.display = "none";
   p13.style.display = "none";
   p14.style.display = "none";
}
/***/
/***/
function loadform10() {
 var p1 = document.getElementById("part1");
 var p2 = document.getElementById("part2");
 var p3 = document.getElementById("part3");
 var p4 = document.getElementById("part4");
 var p5 = document.getElementById("part5");
 var p6 = document.getElementById("part6");
 var p7 = document.getElementById("part7");
 var p8 = document.getElementById("part8");
 var p9 = document.getElementById("part9");
 var p10 = document.getElementById("part10");
 var p11 = document.getElementById("part11");
 var p12 = document.getElementById("part12");
 var p13 = document.getElementById("part13");
 var p14 = document.getElementById("part14");
 p1.style.display = "none";
 p2.style.display = "none";
 p3.style.display = "none";
 p4.style.display = "none";
 p5.style.display = "none";
 p6.style.display = "none";
 p7.style.display = "none";
 p8.style.display = "none";
 p9.style.display = "none";
 p10.style.display = "block";
 p11.style.display = "none";
 p12.style.display = "none";
 p13.style.display = "none";
 p14.style.display = "none";
}
/***/
/***/
function loadform11() {
 var p1 = document.getElementById("part1");
 var p2 = document.getElementById("part2");
 var p3 = document.getElementById("part3");
 var p4 = document.getElementById("part4");
 var p5 = document.getElementById("part5");
 var p6 = document.getElementById("part6");
 var p7 = document.getElementById("part7");
 var p8 = document.getElementById("part8");
 var p9 = document.getElementById("part9");
 var p10 = document.getElementById("part10");
 var p11 = document.getElementById("part11");
 var p12 = document.getElementById("part12");
 var p13 = document.getElementById("part13");
 var p14 = document.getElementById("part14");
 p1.style.display = "none";
 p2.style.display = "none";
 p3.style.display = "none";
 p4.style.display = "none";
 p5.style.display = "none";
 p6.style.display = "none";
 p7.style.display = "none";
 p8.style.display = "none";
 p9.style.display = "none";
 p10.style.display = "none";
 p11.style.display = "block";
 p12.style.display = "none";
 p13.style.display = "none";
 p14.style.display = "none";
}
/***/
/***/
function loadform12() {
     var p1 = document.getElementById("part1");
     var p2 = document.getElementById("part2");
     var p3 = document.getElementById("part3");
     var p4 = document.getElementById("part4");
     var p5 = document.getElementById("part5");
     var p6 = document.getElementById("part6");
     var p7 = document.getElementById("part7");
     var p8 = document.getElementById("part8");
     var p9 = document.getElementById("part9");
     var p10 = document.getElementById("part10");
     var p11 = document.getElementById("part11");
     var p12 = document.getElementById("part12");
     var p13 = document.getElementById("part13");
     var p14 = document.getElementById("part14");
     p1.style.display = "none";
     p2.style.display = "none";
     p3.style.display = "none";
     p4.style.display = "none";
     p5.style.display = "none";
     p6.style.display = "none";
     p7.style.display = "none";
     p8.style.display = "none";
     p9.style.display = "none";
     p10.style.display = "none";
     p11.style.display = "none";
     p12.style.display = "block";
     p13.style.display = "none";
     p14.style.display = "none";
 }
/***/
/***/
function ToTop() {
 document.body.scrollTop = 0; // For Safari
 document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
/***/
/***/
function removeRelativesRow(oButton) {
   var table = document.getElementById('tblUfoneRelatives');
   table.deleteRow(oButton.parentNode.parentNode.rowIndex);
}
/***/
/***/
function removeEmploymentRow(oButton) {
   var table = document.getElementById('tblEmploymentRecord');
   table.deleteRow(oButton.parentNode.parentNode.rowIndex);
}
/***/
/***/
function removeChildRow(oButton) {
   var table = document.getElementById('tblChildren');
   table.deleteRow(oButton.parentNode.parentNode.rowIndex);
}
/***/
/***/
function removeEducationRow(oButton) {
   var table = document.getElementById('tblEducation');
   table.deleteRow(oButton.parentNode.parentNode.rowIndex);
}
/***/
/***/
function removeEmergencyContactRow(oButton) {
 var table = document.getElementById('tblEmergencyContact');
 table.deleteRow(oButton.parentNode.parentNode.rowIndex);
}
/***/
/***/
function AddRelative() {
   var RelativeName = document.getElementById("RelativeName");
   var RelativeRelation = document.getElementById("RelativeRelation");
   if (RelativeName.value != "" && RelativeRelation.value != "") {
       var table = document.getElementById("tblUfoneRelatives");
       var row = table.insertRow(-1);
       var name = row.insertCell(0);
       name.contentEditable = "true";
       var relation = row.insertCell(1);
       relation.contentEditable = "true";
       var td = document.createElement('td');
       td = row.insertCell(2);
       var button = document.createElement('input');
       button.setAttribute('type', 'button');
       button.setAttribute('value', 'Delete');
       button.setAttribute
       button.setAttribute('onclick', 'removeRelativesRow(this)');
       td.appendChild(button);
       name.innerHTML = RelativeName.value;
       relation.innerHTML = RelativeRelation.value;
   }
   RelativeName.value = "";
   RelativeRelation.value = "";
}
/***/
/***/
function AddEmployment() {
   var CompanyName = document.getElementById("CompanyName");
   var StartDate = document.getElementById("WorkStartDate");
   var EndDate = document.getElementById("WorkEndDate");
   var Salary = document.getElementById("Salary");
   var Designation = document.getElementById("Designation");
   var Resign = document.getElementById("Resign");
   if (CompanyName.value != "" && StartDate.value != "" && EndDate.value != "" && Salary.value != "" && Designation.value != "" && Resign.value != "") {
       var table = document.getElementById("tblEmploymentRecord");
       var row = table.insertRow(-1);
       var cname = row.insertCell(0);
       cname.contentEditable = "true";
       var start = row.insertCell(1);
       start.contentEditable = "true";
       var end = row.insertCell(2);
       end.contentEditable = "true";
       var sal = row.insertCell(3);
       sal.contentEditable = "true";
       var desig = row.insertCell(4);
       desig.contentEditable = "true";
       var res = row.insertCell(5);
       res.contentEditable = "true";
       var td = document.createElement('td');
       td = row.insertCell(6);
       var button = document.createElement('input');
       button.setAttribute('type', 'button');
       button.setAttribute('value', 'Delete');
       button.setAttribute('onclick', 'removeEmploymentRow(this)');
       td.appendChild(button);
       cname.innerHTML = CompanyName.value;
       start.innerHTML = StartDate.value;
       end.innerHTML = EndDate.value;
       sal.innerHTML = Salary.value;
       desig.innerHTML = Designation.value;
       res.innerHTML = Resign.value;
   }
   CompanyName.value = "";
   StartDate.value = "";
   EndDate.value = "";
   Salary.value = "";
   Designation.value = "";
   Resign.value = "";
}
/***/
/***/
function AddChild() {
   var ChildName = document.getElementById("ChildName");
   var ChildDOB = document.getElementById("ChildDOB");
   if (ChildName.value != "" && ChildDOB.value != "") {
       var table = document.getElementById("tblChildren");
       var row = table.insertRow(-1);
       var name = row.insertCell(0);
       name.contentEditable = "true";
       var dob = row.insertCell(1);
       dob.contentEditable = "true";
       var td = document.createElement('td');
       td = row.insertCell(2);
       var button = document.createElement('input');
       button.setAttribute('type', 'button');
       button.setAttribute('value', 'Delete');
       button.setAttribute('class', 'btn-block');
       button.setAttribute('onclick', 'removeChildRow(this)');
       td.appendChild(button);
       name.innerHTML = ChildName.value;
       dob.innerHTML = ChildDOB.value;
   }
   ChildName.value = "";
   ChildDOB.value = "";
}
/***/
/***/
function AddEducation() {
   var InstituteName = document.getElementById("InstituteName");
   var StartDate = document.getElementById("EducationStartDate");
   var EndDate = document.getElementById("EducationEndDate");
   var Subjects = document.getElementById("Subjects");
   var Degree = document.getElementById("Degree");
   var CGPA = document.getElementById("CGPA");
   if (InstituteName.value != "" && StartDate.value != "" && EndDate.value != "" && Subjects.value != "" && Degree.value != "" && CGPA.value != "") {
       var table = document.getElementById("tblEducation");
       var row = table.insertRow(-1);
       var institute = row.insertCell(0);
       institute.contentEditable = "true";
       var start = row.insertCell(1);
       start.contentEditable = "true";
       var end = row.insertCell(2);
       end.contentEditable = "true";
       var subj = row.insertCell(3);
       subj.contentEditable = "true";
       var deg = row.insertCell(4);
       deg.contentEditable = "true";
       var gpa = row.insertCell(5);
       gpa.contentEditable = "true";
       var td = document.createElement('td');
       td = row.insertCell(6);
       var button = document.createElement('input');
       button.setAttribute('type', 'button');
       button.setAttribute('value', 'Delete');
       button.setAttribute('onclick', 'removeEducationRow(this)');
       td.appendChild(button);
       institute.innerHTML = InstituteName.value;
       start.innerHTML = StartDate.value;
       end.innerHTML = EndDate.value;
       subj.innerHTML = Subjects.value;
       deg.innerHTML = Degree.value;
       gpa.innerHTML = CGPA.value;
   }
   InstituteName.value = "";
   StartDate.value = "";
   EndDate.value = "";
   Subjects.value = "";
   Degree.value = "";
   CGPA.value = "";
}
/***/
/***/
function AddEmergencyContact() {
   var Name = document.getElementById("EmergencyContactName");
   var Relationship = document.getElementById("EmergencyContactRelationship");
   var Address = document.getElementById("EmergencyContactAddress");
   var Number = document.getElementById("EmergencyContactNumber");
   if (Name.value != "" && Relationship.value != "" && Address.value != "" && Number.value != "") {
       var table = document.getElementById("tblEmergencyContact");
       var row = table.insertRow(-1);
       var contactname = row.insertCell(0);
       contactname.contentEditable = "true";
       var contactrelationship = row.insertCell(1);
       contactrelationship.contentEditable = "true";
       var contactaddress = row.insertCell(2);
       contactaddress.contentEditable = "true";
       var contactnumber = row.insertCell(3);
       contactnumber.contentEditable = "true";
       var td = document.createElement('td');
       td = row.insertCell(4);
       var button = document.createElement('input');
       button.setAttribute('type', 'button');
       button.setAttribute('value', 'Delete');
       button.setAttribute('onclick', 'removeEmergencyContactRow(this)');
       td.appendChild(button);
       contactname.innerHTML = Name.value;
       contactrelationship.innerHTML = Relationship.value;
       contactaddress.innerHTML = Address.value;
       contactnumber.innerHTML = Number.value;
   }
   Name.value = "";
   Relationship.value = "";
   Address.value = "";
   Number.value = "";
}
/***/
/***/
function FillDeclarationForm() {
   n = new Date();
   y = n.getFullYear();
   m = n.getMonth() + 1;
   d = n.getDate();
   document.getElementById("DeclarationDate").innerHTML = "Date: " + m + "/" + d + "/" + y;
   document.getElementById("ApplicantName").innerHTML = "Name of Employee: " + document.getElementById("Name").value;
}
/***/
/***/
function FillAuthorizationForm() {
   n = new Date();
   y = n.getFullYear();
   m = n.getMonth() + 1;
   d = n.getDate();
   document.getElementById("AuthorizationDate").innerHTML = "Date: " + m + "/" + d + "/" + y;
   document.getElementById("AuthorizationName").innerHTML = "Name of Employee: " + document.getElementById("Name").value;
   document.getElementById("AuthorizationFather").innerHTML = "Father Name: " + document.getElementById("FatherName").value;
   document.getElementById("AuthorizationCNIC").innerHTML = "CNIC: " + document.getElementById("CNIC").value;
   document.getElementById("AuthorizationDOB").innerHTML = "Date of Birth (mm/dd/yyyy): " + document.getElementById("DOB").value;
}
/***/

/***/
var $TABLE = $('#table');
var $BTN = $('#export-btn');
var $EXPORT = $('#export');
$('.table-add').click(function () {
   var $clone = $TABLE.find('tr.hide').clone(true).removeClass('hide table-line');
   $TABLE.find('table').append($clone);
});
$('.table-remove').click(function () {
   $(this).parents('tr').detach();
});
$('.table-up').click(function () {
   var $row = $(this).parents('tr');
   if ($row.index() === 1) return; // Don't go above the header
   $row.prev().before($row.get(0));
});
$('.table-down').click(function () {
   var $row = $(this).parents('tr');
   $row.next().after($row.get(0));
});
// A few jQuery helpers for exporting only
jQuery.fn.pop = [].pop;
jQuery.fn.shift = [].shift;

$BTN.click(function () {
   var $rows = $TABLE.find('tr:not(:hidden)');
   var headers = [];
   var data = [];

   // Get the headers (add special header logic here)
   $($rows.shift()).find('th:not(:empty)').each(function () {
       headers.push($(this).text().toLowerCase());
   });

   // Turn all existing rows into a loopable array
   $rows.each(function () {
       var $td = $(this).find('td');
       var h = {};

       // Use the headers from earlier to name our hash keys
       headers.forEach(function (header, i) {
           h[header] = $td.eq(i).text();
       });

       data.push(h);
   });

   // Output the result
   $EXPORT.text(JSON.stringify(data));
});
/*** */