import React from "react"

const Blogs = () => {
	return (
		<div>
			<h2 className="text-center ">
				<span style={{ borderBottom: "3px solid #0dcaf0" }}>
					Knowing our blogs
				</span>
			</h2>
			<div className="container">
				<img
					className="w-100 pt-4"
					src="https://cdn.educba.com/academy/wp-content/uploads/2018/07/Java-Script-vs-Node-JS-1.png"
					alt=""
				/>
				<h3 className="py-5">Difference between javascript and nodejs</h3>
				<p>
					<p>
						JavaScript is a programming language, which runs in web browsers.
						Whereas Node.js is an interpreter or running environment for
						JavaScript, which holds a lot of requiring libraries and all.
						JavaScript is basically one standard defining programming language;
						it can run any browser with a default browser running environment.
						It is a very strong language normally used for a web application on
						any verification or any specific business logic. We need to append
						in the screen without page refreshing. JavaScript also helps to use
						Ajax at any time, which helps us call any server-side script for
						given dynamic data based on the requirement. It also helps with
						generating dynamic HTML tables based on business requirement. JQuery
						is one of the popular libraries to make comfortable use of
						JavaScript by avoiding to write a lot of code.
					</p>
					<br />
					<p>
						Node.js also holds a lot of relative libraries, which we normally
						use in javascript for general purpose programming language. It is
						actually a kind of environment or interpreter that can represent
						JavaScript or run any javascript program. It mainly helps us execute
						some non-blocking operation like some operating system special
						information like certificate details or hardware details; we may use
						node js on the same, which help us do it, and JavaScript normal
						programming will not help us on the same. Normally all browsers have
						a JavaScript engine that helps us to run javascript in a web
						browser. Spider monkey (FireFox), JavaScript Core (Safari), V8
						(Google Chrome) are some popular javascript engine using verities
						browsers. But node js is using the V8 engine directly, with some
						libraries to do some I/O or networking operations. It actually helps
						us use JavaScript from outside of the browser, like creating,
						writing or executing one shell script, some back-end services, or
						running on hardware. Let us understand JavaScript vs Node JS in
						detail
					</p>
				</p>
				<hr />
				<div className="pt-4">
					<img
						src="https://www.kadamtech.com/wp-content/uploads/2019/01/sql-vs-no-sql-1.png"
						className="w-100"
						alt=""
					/>
					<h3 className="py-3">Differences between sql and nosql databases.</h3>
					<p>
						When choosing a modern database, one of the biggest decisions is
						picking a relational (SQL) or non-relational (NoSQL) data structure.
						While both are viable options, there are key differences between the
						two that users must keep in mind when making a decision.{" "}
						<p>
							Here, we break down the most important distinctions and discuss
							the best SQL and NoSQL database systems available.
						</p>
						<p>The five critical differences between SQL vs NoSQL are:</p>
						<ol>
							<li>
								SQL databases are relational, NoSQL databases are
								non-relational.
							</li>
							<li>
								SQL databases use structured query language and have a
								predefined schema. NoSQL databases have dynamic schemas for
								unstructured data.
							</li>
							<li>
								SQL databases are vertically scalable, while NoSQL databases are
								horizontally scalable.
							</li>
							<li>
								SQL databases are table-based, while NoSQL databases are
								document, key-value, graph, or wide-column stores.
							</li>
							<li>
								SQL databases are better for multi-row transactions, while NoSQL
								is better for unstructured data like documents or JSON.
							</li>
						</ol>
					</p>
				</div>
				<hr />
				<div className="pt-4">
					<img
						className="w-100 img-fluid"
						src="https://www.krakend.io/images/krakend-signer-flow.png"
						alt=""
					/>
					<h3 className="py-3">
						What is the purpose of jwt and how does it work
					</h3>
					<h5>what is JWT?</h5>
					<p>
						JWT, or JSON Web Token, is an open standard used to share security
						information between two parties — a client and a server. Each JWT
						contains encoded JSON objects, including a set of claims. JWTs are
						signed using a cryptographic algorithm to ensure that the claims
						cannot be altered after the token is issued.
					</p>
					<h5>how JWT work</h5>
					<p>
						JWTs differ from other web tokens in that they contain a set of
						claims. Claims are used to transmit information between two parties.
						What these claims are depends on the use case at hand. For example,
						a claim may assert who issued the token, how long it is valid for,
						or what permissions the client has been granted.
					</p>
					<p>
						A JWT is a string made up of three parts, separated by dots (.), and
						serialized using base64. In the most common serialization format,
						compact serialization, the JWT looks something like this:
						xxxxx.yyyyy.zzzzz.
					</p>
					<p>Once decoded, you will get two JSON strings:</p>
					<ol>
						<li>The signature.</li>
						<li>The header and the payload.</li>
					</ol>
					<p>
						The JOSE (JSON Object Signing and Encryption) header contains the
						type of token — JWT in this case — and the signing algorithm.
						<br />
						<br />
						The payload contains the claims. This is displayed as a JSON string,
						usually containing no more than a dozen fields to keep the JWT
						compact. This information is typically used by the server to verify
						that the user has permission to perform the action they are
						requesting.
						<br />
						<br />
						There are no mandatory claims for a JWT, but overlaying standards
						may make claims mandatory. For example, when using JWT as bearer
						access token under OAuth2.0, iss, sub, aud, and exp must be present.
						some are more common than others.
						<br />
						<br />
						The signature ensures that the token hasn’t been altered. The party
						that creates the JWT signs the header and payload with a secret that
						is known to both the issuer and receiver, or with a private key
						known only to the sender. When the token is used, the receiving
						party verifies that the header and payload match the signature.
					</p>
				</div>
			</div>
		</div>
	)
}

export default Blogs
