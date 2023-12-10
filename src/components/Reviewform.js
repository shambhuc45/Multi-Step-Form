import React from "react";

export default function Reviewform({ userData }) {
  return (
  <>
  <div className="review">
  <table className="review-table">
  <tbody>
        <tr>
          <th>Field</th>
          <th>Data</th>
        </tr>
        <tr>
          <td><strong>Name:</strong></td>
          <td>{userData.name}</td>
        </tr>
        <tr>
          <td><strong>Email:</strong></td>
          <td>{userData.email}</td>
        </tr>
        <tr>
          <td><strong>Address:</strong></td>
          <td>{userData.address}</td>
        </tr>
        <tr>
          <td><strong>Phone:</strong></td>
          <td>{userData.phone}</td>
        </tr>
        <tr>
          <td><strong>Gender:</strong></td>
          <td>{userData.gender}</td>
        </tr>
        <tr>
          <td><strong>Date of Birth:</strong></td>
          <td>{userData.dob}</td>
        </tr>
        <tr>
          <td><strong>Account Type:</strong></td>
          <td>{userData.accountType}</td>
        </tr>
        <tr>
          <td><strong>Document Type:</strong></td>
          <td>{userData.documentType}</td>
        </tr>
        <tr>
          <td><strong>Date of Application:</strong></td>
          <td>{userData.doa}</td>
        </tr>
        <tr>
          <td><strong>Nominee's Name:</strong></td>
          <td>{userData.nomName}</td>
        </tr>
        <tr>
          <td><strong>Nominee's Age:</strong></td>
          <td>{userData.nomAge}</td>
        </tr>
        <tr>
          <td><strong>Relation:</strong></td>
          <td>{userData.relation}</td>
        </tr>
        <tr>
          <td><strong>Nominee's Phone:</strong></td>
          <td>{userData.nomPhone}</td>
        </tr>
        <tr>
          <td><strong>Nominee's Address:</strong></td>
          <td>{userData.nomAdd}</td>
        </tr>
        <tr>
          <td><strong>Nominee's Citizenship No.:</strong></td>
          <td>{userData.nomCitizenship}</td>
        </tr>
      </tbody>
  </table>
  </div>
    </>
  );
}
