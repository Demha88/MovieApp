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

export function insertMovie(id, title,rating,image) {
    return querySql("insert into movies(id, title, rating, image) values(?,?,?,?)", [id, title,rating,image])
}

export function deleteMovie(id) {
    return querySql("delete from movies where id=?", [id])
}

export function getById(id) {
    return querySql("select * from movies where id=?", [id])
}