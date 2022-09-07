import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase("db.db")

function querySql(query, args) {
    return new Promise((resolve, reject) => {
        db.transaction(
            (tx) => {
                tx.executeSql(query, args, 
                    (_, data) => {
                        resolve(data)
                    }, 
                    (_, err) => {
                        reject(err)
                    })
            }
        )
    })
}

export function loadDatabase() {
    return querySql("create table if not exists movies (id integer primary key not null, image text, rating integer, title text)", [])
}

export function getMovies() {
    return querySql("select * from movies", null)
}

export function insertMovie(id, image,rating,title) {
    return querySql("insert into movies(id, image, rating, title) values(?,?,?,?)", [id, image,rating,title])
}

export function deleteMovie(id) {
    return querySql("delete from movies where id=?", [id])
}