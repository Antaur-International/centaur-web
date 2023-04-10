/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Header from "../components/Header";
import { useAuth } from "../data/Context/UserContext";
import { BoxLoading } from "react-loadingg";
import { Tree, TreeNode } from "react-organizational-chart";

export const FacultyDetails = () => {
  const { userInstance, isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      console.log(userInstance.batch.students);
    }

    return () => {
      console.log("unmounting");
    };
  }, []);

  if (!isAuthenticated) {
    return <BoxLoading color="#65FF52" />;
  }
  return (
    <section className="lyt_wrapper_facultyDetails">
      <Header />

      <div className="wrapper_facultyDetails_tree">
        <Tree
          lineWidth="2px"
          lineColor="#65FF52"
          lineBorderRadius="5px"
          nodePadding="10px"
          lineHeight="80px"
          label={
            <h2 className="wrapper_facultyDetails_title">Faculty Members</h2>
          }
        >
          {userInstance.batch.students
            .filter((faculty) => faculty.type === "staff")
            .map((faculty) => {
              return (
                <TreeNode
                  label={
                    <div className="facultyDetails_facultyList_item">
                      <img src={faculty.image} alt="" />
                      <p>{faculty.name}</p>
                    </div>
                  }
                />
              );
            })}
        </Tree>
      </div>
    </section>
  );
};
