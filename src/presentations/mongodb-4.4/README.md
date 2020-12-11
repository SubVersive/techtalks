---
title: MongoDB 4.4
---

# update featureCompatibilityVersion set to at least 4.4

# Indexes Build Simultaneously on Data-Bearing Replica Set Members
MongoDB 4.4 running featureCompatibilityVersion: "4.2" builds indexes on the primary before replicating the index build to secondaries.
Starting with MongoDB 4.4, index builds on a replica set or sharded cluster build simultaneously across all data-bearing replica set members.

# Minimum Oplog Retention Period
Starting in MongoDB 4.4, you can specify the minimum number of hours to preserve an oplog entry. The mongod only removes an oplog entry if:
* The oplog has reached the maximum configured size, and
* The oplog entry is older than the configured number of hours based on the host system clock.

# $collStats (aggregation) + PRACTICE
https://docs.mongodb.com/manual/reference/operator/aggregation/collStats/

# NEW $unionWith (aggregation) + PRACTICE
https://docs.mongodb.com/manual/reference/operator/aggregation/unionWith/#pipe._S_unionWith

# Positional $ Operator + Improvements + PRACTICE
* https://docs.mongodb.com/manual/release-notes/4.4/#improvements-to-positional-operator
* https://docs.mongodb.com/manual/reference/operator/projection/positional/

# Improvements to explain Results
Explain results for aggregation include the nReturned and executionTimeMillisEstimate fields for each pipeline stage when you run db.collection.explain().aggregate() method in executionStats and allPlansExecution modes.

# [OPTIONAL] serverStatus
https://docs.mongodb.com/manual/reference/command/serverStatus/

# Hidden Indexes
A new index option hidden
Starting in version 4.4, MongoDB adds the ability to hide or unhide indexes from the query planner. An index hidden from the query planner is not evaluated as part of query plan selection.

By hiding an index from the planner, users can evaluate the potential impact of dropping an index without having to drop the index. If the impact is negative, the user can unhide the index instead of having to recreate a dropped index. And because indexes are fully maintained while hidden, hidden indexes are immediately available for use once unhidden.

# Hashed Indexes + PRACTICE
* https://docs.mongodb.com/manual/core/index-hashed/#index-type-hashed
* https://docs.mongodb.com/manual/release-notes/4.4/#compound-hashed-indexes

# Transactons
Starting in MongoDB 4.4 with feature compatibility version (fcv) "4.4", you can create collections and indexes inside a multi-document transaction unless the transaction is a cross-shard write transaction.

When creating a collection inside a transaction:
* You can implicitly create a collection, such as with:
  * an insert operation against a non-existing collection;
  * an update/findAndModify operation with upsert: true against a non-existing collection.
* You can explicitly create a collection using the create command or its helper db.createCollection().

# Projection + PRACTICE
Starting in MongoDB 4.4, as part of making find and findAndModify projection consistent with aggregation’s $project stage,
* The find and findAndModify projection can accept aggregation expressions and syntax.
* MongoDB enforces additional restrictions with regards to projections. See Projection Restrictions for details.
* https://docs.mongodb.com/manual/meta/aggregation-quick-reference/#aggregation-expressions
* https://docs.mongodb.com/manual/reference/limits/#Projection-Restrictions

# Structured Logging
https://docs.mongodb.com/manual/release-notes/4.4/#structured-logging