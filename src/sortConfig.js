const sortInfo = {
    columns: [{
            colName: "name",
            sort: "",
            funcSort: function (arr) {
                if (this.sort === "Asc") {
                    arr.sort(function (a, b) {
                        return a.task.localeCompare(b.task)
                    })
                } else {
                    arr.sort(function (a, b) {
                        return -a.task.localeCompare(b.task)
                    })
                }
            }
        },
        {
            colName: "date",
            sort: "",
            funcSort: function (arr) {
                if (this.sort === "Asc") {
                    arr.sort(function (a, b) {
                        return a.date.localeCompare(b.date)
                    })
                } else {
                    arr.sort(function (a, b) {
                        return -a.date.localeCompare(b.date)
                    })
                }
            }
        }
    ]
}

export default sortInfo;