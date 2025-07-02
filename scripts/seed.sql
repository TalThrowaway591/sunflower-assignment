
CREATE DATABASE sunflower_db;

\c sunflower_db

CREATE TABLE accounts (
    id VARCHAR(15) PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE account_scores (
    id VARCHAR(15) PRIMARY KEY,
    account_id VARCHAR(15) REFERENCES accounts(id) ON DELETE CASCADE,
    value BIGINT NOT NULL DEFAULT 0,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);


insert into accounts (id, username) values ('account_vn98u75', 'himselfsalt');
insert into accounts (id, username) values ('account_vjy5tm9', 'repeaterfanfare');
insert into accounts (id, username) values ('account_5visn59', 'lowlywear');
insert into accounts (id, username) values ('account_oqw3hdu', 'forgiveunfasten');
insert into accounts (id, username) values ('account_rd2h5dr', 'clueevacuate');
insert into accounts (id, username) values ('account_6u3qwdv', 'importancewry');
insert into accounts (id, username) values ('account_jsb77fi', 'favorsnapshot');
insert into accounts (id, username) values ('account_2283ysd', 'elievednortherly');
insert into accounts (id, username) values ('account_uzoqerr', 'frequentaboriginal');
insert into accounts (id, username) values ('account_veiybb5', 'dirtoutfit');
insert into accounts (id, username) values ('account_akvhmzy', 'cannonballgrocery');
insert into accounts (id, username) values ('account_l9c09h4', 'crusadefinancial');
insert into accounts (id, username) values ('account_yo9juyt', 'democraticworldcup');

insert into account_scores (id, account_id, value) values ('score_vn98u75', 'account_vn98u75', 52739);
insert into account_scores (id, account_id, value) values ('score_vjy5tm9', 'account_vjy5tm9', 259);
insert into account_scores (id, account_id, value) values ('score_5visn59', 'account_5visn59', 13956);
insert into account_scores (id, account_id, value) values ('score_oqw3hdu', 'account_oqw3hdu', 4874);
insert into account_scores (id, account_id, value) values ('score_rd2h5dr', 'account_rd2h5dr', 12);
insert into account_scores (id, account_id, value) values ('score_6u3qwdv', 'account_6u3qwdv', 819);
insert into account_scores (id, account_id, value) values ('score_jsb77fi', 'account_jsb77fi', 91581);
insert into account_scores (id, account_id, value) values ('score_2283ysd', 'account_2283ysd', 7895);
insert into account_scores (id, account_id, value) values ('score_uzoqerr', 'account_uzoqerr', 115712);
insert into account_scores (id, account_id, value) values ('score_veiybb5', 'account_veiybb5', 851);
insert into account_scores (id, account_id, value) values ('score_akvhmzy', 'account_akvhmzy', 8265);
insert into account_scores (id, account_id, value) values ('score_l9c09h4', 'account_l9c09h4', 57829);
insert into account_scores (id, account_id, value) values ('score_yo9juyt', 'account_yo9juyt', 105);